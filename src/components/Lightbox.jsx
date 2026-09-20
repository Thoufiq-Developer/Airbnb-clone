import React, { useEffect, useCallback } from 'react';
import './Lightbox.css';
import { propertyData } from '../data/mockData';

const Lightbox = ({ initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const { images } = propertyData;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handleNext, handlePrev]);

  return (
    <div className="lightbox-overlay flex-col">
      <div className="lightbox-header flex justify-between items-center">
        <button className="close-btn flex items-center justify-center gap-2" onClick={onClose}>
          <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '3'}}><path d="m6 6 20 20M26 6 6 26"></path></svg>
          <span style={{fontSize: '14px', fontWeight: 600}}>Close</span>
        </button>
        <div className="lightbox-counter">
           {currentIndex + 1} / {images.length}
        </div>
        <div className="flex gap-4">
          <button className="action-btn flex items-center justify-center">
            <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
          </button>
          <button className="action-btn flex items-center justify-center">
            <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          </button>
        </div>
      </div>
      
      <div className="lightbox-content flex justify-between items-center">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '4'}}><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
        </button>
        
        <div className="lightbox-image-container">
           <img src={images[currentIndex]} alt={`Property ${currentIndex}`} className="lightbox-img" />
        </div>
        
        <button className="nav-btn next-btn" onClick={handleNext}>
          <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '4'}}><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
