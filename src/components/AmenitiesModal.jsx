import React, { useEffect } from 'react';
import './AmenitiesModal.css';
import { propertyData } from '../data/mockData';
import { getIcon } from '../utils/icons';

const AmenitiesModal = ({ onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="amenities-modal-overlay" onClick={onClose}>
      <div className="amenities-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="amenities-modal-header">
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 32 32" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible'}}><path d="m6 6 20 20M26 6 6 26"></path></svg>
          </button>
        </div>
        <div className="amenities-modal-body">
          <h2 className="amenities-modal-title">What this place offers</h2>
          
          <div className="amenities-categories">
            {propertyData.allAmenities.map((cat, idx) => (
              <div key={idx} className="amenities-category">
                <h3 className="category-title">{cat.category}</h3>
                <ul className="category-items">
                  {cat.items.map((item, i) => (
                    <li key={i} className={`category-item flex items-center gap-4 ${item.crossedOut ? 'text-gray-400 line-through' : 'text-gray-900'}`} style={item.crossedOut ? {color: '#717171', textDecoration: 'line-through'} : {color: '#222'}}>
                      <div className="relative">
                        <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'currentcolor', stroke: 'none'}}>
                          {getIcon(item.icon)}
                        </svg>
                        {item.crossedOut && (
                          <svg viewBox="0 0 32 32" style={{position: 'absolute', top: 0, left: 0, height: '24px', width: '24px', stroke: 'currentcolor', strokeWidth: 1.5, fill: 'none'}}>
                            <path d="M4 28L28 4"></path>
                          </svg>
                        )}
                      </div>
                      <span className="item-name" style={{fontSize: '16px'}}>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
