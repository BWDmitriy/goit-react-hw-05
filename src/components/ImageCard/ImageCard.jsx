export default function ImageCard({ imageUrl, altText, onClick }) {
  return (
      <div>
        <img src={imageUrl} alt={altText} onClick={onClick} />
      </div>
  );
}