import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onRequestClose, image }) {
  if (!image) return null;
  const { reactModal__Overlay, modalContent, closeBtn, img, info } = styles;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName={reactModal__Overlay}
      className={modalContent}
      shouldCloseOnOverlayClick={true}
    >
      <button className={closeBtn} onClick={onRequestClose}>
        &times;
      </button>
      <img
        className={img}
        src={image.urls.regular}
        alt={image.alt_description || "Image"}
      />
      <div className={info}>
        <p>
          <strong>Author:</strong> {image.user?.name}
        </p>
        <p>
          <strong>Likes:</strong> {image.likes}
        </p>
        {image.description && (
          <p>
            <strong>Description:</strong> {image.description}
          </p>
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
