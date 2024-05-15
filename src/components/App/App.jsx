import { useEffect, useState, useCallback } from 'react';
import './App.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=WWP0ZkMHW4a1CGgA-GBI0FrCCywjnB3L6d04IFuYIlk&query=${query}&page=${page}`
      );
      const newImages = response.data.results;
      if (page === 1) {
        setImages(newImages);
      } else {
        setImages(prevImages => [...prevImages,...newImages]);
      }
    } catch (error) {
      setError('Failed to fetch images');
    } finally {
      setIsLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    if (query) {
    fetchImages();
  }
  }, [fetchImages]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSearchSubmit = (inputValue) => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };
const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
   const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
       {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          selectedImage={selectedImage}
          onRequestClose={closeModal}
        />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <LoadMoreBtn loadMore={loadMore} />}
    </div>
  );
}

export default App;