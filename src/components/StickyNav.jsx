import React, { useState, useEffect } from 'react';
import './StickyNav.css';
import { propertyData } from '../data/mockData';

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past the main photo gallery (~600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Determine which section is currently active
      const sections = ['photos', 'amenities', 'reviews', 'location'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above or near the middle of the viewport
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Offset by 80px (the height of the StickyNav) so it doesn't overlap the title
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky-nav">
      <div className="container flex justify-between items-center h-full">
        <div className="sticky-nav-links flex gap-6">
          <a href="#photos" className={activeSection === 'photos' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'photos')}>Photos</a>
          <a href="#amenities" className={activeSection === 'amenities' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'amenities')}>Amenities</a>
          <a href="#reviews" className={activeSection === 'reviews' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a>
          <a href="#location" className={activeSection === 'location' ? 'active' : ''} onClick={(e) => scrollToSection(e, 'location')}>Location</a>
        </div>
        <div className="sticky-nav-reserve flex items-center gap-4">
          <div className="sticky-nav-price-info flex-col items-end">
             <div className="price-line">
               <span className="price">₹{propertyData.pricePerNight.toLocaleString()}</span> for 5 nights
             </div>
             <div className="rating-line flex items-center gap-1">
               <svg viewBox="0 0 32 32" style={{height: '12px', width: '12px', display: 'block', fill: 'currentcolor'}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
               <span className="rating-text">{propertyData.rating} · {propertyData.reviewsCount} reviews</span>
             </div>
          </div>
          <button className="reserve-btn">Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
