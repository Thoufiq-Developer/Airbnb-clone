import React, { useEffect, useRef } from 'react';
import './PhotoTour.css';
import { propertyData } from '../data/mockData';

const PhotoTour = ({ onClose, onOpenLightbox }) => {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const contentRef = useRef(null);

  const scrollToCategory = (idx) => {
    const el = document.getElementById(`category-${idx}`);
    if (el && contentRef.current) {
      // scroll relative to the content container, offset for the sticky header (which is inside here or outside?)
      // Actually, since the container handles scroll, we can use scrollIntoView.
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Flatten the images array so we know the absolute index for lightbox
  let imageCounter = 0;
  const categoriesWithIndex = propertyData.tourCategories.map(cat => {
    return {
      ...cat,
      images: cat.images.map(img => {
        const currentIdx = imageCounter;
        imageCounter++;
        return { src: img, globalIndex: currentIdx };
      })
    };
  });

  return (
    <div className="photo-tour-overlay">
      <div className="photo-tour-header flex justify-between items-center">
        <button className="back-btn flex items-center justify-center" onClick={onClose}>
          <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '3'}}><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
        </button>
        <div className="flex gap-4">
          <button className="action-btn flex items-center justify-center gap-2">
            <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
          </button>
          <button className="action-btn flex items-center justify-center gap-2">
            <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          </button>
        </div>
      </div>
      
      <div className="photo-tour-content" ref={contentRef}>
        
        <div className="tour-thumbnails-wrapper">
          <div className="tour-thumbnails flex gap-4">
            {propertyData.tourCategories.map((cat, idx) => (
              <div key={idx} className="thumb-item flex-col gap-2" onClick={() => scrollToCategory(idx)}>
                 <img src={cat.images[0]} alt={cat.title} className="thumb-img" />
                 <span className="thumb-title">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tour-sections">
           {categoriesWithIndex.map((cat, idx) => (
              <div key={idx} id={`category-${idx}`} className="tour-category-section flex">
                 <div className="tour-category-info flex-col">
                    <h2 className="tour-category-title">{cat.title}</h2>
                    {cat.description && <p className="tour-category-desc">{cat.description}</p>}
                 </div>
                 <div className="tour-category-images">
                    {/* Render images in a masonry-like way based on count */}
                    <div className="masonry-grid">
                      {cat.images.map((imgObj, i) => (
                        <div key={i} className={`masonry-item ${i === 0 ? 'full' : 'half'}`} onClick={() => onOpenLightbox(imgObj.globalIndex)}>
                           <img src={imgObj.src} alt={`${cat.title} ${i}`} />
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default PhotoTour;
