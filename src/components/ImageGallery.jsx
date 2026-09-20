import React from 'react';
import './ImageGallery.css';
import { propertyData } from '../data/mockData';

const ImageGallery = ({ onOpenPhotoTour, onOpenLightbox }) => {
  const { images } = propertyData;

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        <div className="main-image" onClick={() => onOpenLightbox(0)}>
          <img src={images[0]} alt="Property Main" />
        </div>
        <div className="secondary-images">
          <img src={images[1]} alt="Property 2" className="img-top-left" onClick={() => onOpenLightbox(1)} />
          <img src={images[2]} alt="Property 3" className="img-top-right" onClick={() => onOpenLightbox(2)} />
          <img src={images[3]} alt="Property 4" className="img-bottom-left" onClick={() => onOpenLightbox(3)} />
          <img src={images[4]} alt="Property 5" className="img-bottom-right" onClick={() => onOpenLightbox(4)} />
          
          <button className="show-all-btn flex items-center gap-2" onClick={onOpenPhotoTour}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '14px', width: '14px', fill: 'currentcolor'}}><path d="M3 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
            Show all photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
