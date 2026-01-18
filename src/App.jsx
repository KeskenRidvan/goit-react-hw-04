import "./styles/App.css";
import { searchImages } from "./services/api";

import { useState, useEffect } from "react";

import { SearchBar } from "./components/features/search";
import {
  ImageGallery,
  ImageCard,
  ImageModal,
} from "./components/features/image";

import { LoadMoreBtn, Loader } from "./components/features/loader";
import { ErrorMessage } from "./components/features/error";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    searchImages(query, page)
      .then((data) => {
        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
        setTotalPages(data.total_pages);
      })
      .catch(() => setError("Failed to fetch images. Please try again."))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery !== query) {
      setIsLoading(true);
      setError(null);
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setError(null);
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="main-content">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        images={images}
        renderItem={(image) => (
          <ImageCard key={image.id} image={image} onClick={handleImageClick} />
        )}
      />
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
