import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image, index) => (
        <li key={image.id}> 
          <ImageCard
            imageUrl={image.urls.small}
            altText={image.description || 'Image description not available'}
            onClick={() => onImageClick(image)}
          />
        </li>
      ))}
    </ul>
  );
}
