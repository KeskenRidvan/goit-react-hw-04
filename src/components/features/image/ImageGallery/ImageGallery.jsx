import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, renderItem }) => {
  const { gallery } = styles;

  if (!images || images.length === 0) return null;
  return (
    <ul className={gallery}>
      {images.map((image, idx) => (
        <li key={image.id || idx}>{renderItem(image)}</li>
      ))}
    </ul>
  );
};

export default ImageGallery;
