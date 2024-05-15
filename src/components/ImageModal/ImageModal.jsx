import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ImageModal({ isOpen, selectedImage, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
      className="modal"
      overlayClassName="overlay"
    >
      <img src={selectedImage.urls.full} alt={selectedImage.description || 'Selected image'} />
      {/* <button onClick={onRequestClose}>Close</button> */}
    </Modal>
  );
}

export default ImageModal;
