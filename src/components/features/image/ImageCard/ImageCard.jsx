import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const { card, img } = styles;

  return (
    <div className={card} onClick={() => onClick(image)}>
      <img
        className={img}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
