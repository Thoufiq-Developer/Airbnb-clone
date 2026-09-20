import React, { useState } from 'react';
import './PropertyInfo.css';
import { propertyData } from '../data/mockData';
import AmenitiesModal from './AmenitiesModal';
import { getIcon } from '../utils/icons';

const PropertyInfo = () => {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  const fullDesc = "Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafes, restaurants, and nightlife 🍸, it's the perfect getaway for you and your loved ones to enjoy a serene vacation.";
  const shortDesc = "Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafes, restaurants, and nightlife 🍸, it's...";

  return (
    <div className="property-info">
      {/* Title & Stats */}
      <h2 className="property-title">Entire serviced apartment in Candolim, India</h2>
      <p className="property-stats">{propertyData.stats}</p>

      <div className="guest-favourite-banner border rounded-xl p-6 flex justify-between items-center my-6">
        <div className="badge-left flex items-center gap-4">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '32px', width: '32px', fill: 'currentcolor'}}><path d="M11 25.5c-2.4-1.2-4.2-3.3-5-5.8-.3-1.1-.5-2.2-.5-3.3v-4.5c0-1.8.8-3.4 2-4.6-2.5 1-4.7 2.8-6.1 5.2-.8 1.4-1.2 3.1-1.2 4.8v4.5c0 1.9.5 3.8 1.5 5.4 1 1.6 2.3 2.9 3.9 3.9.7.4 1.4.8 2.2 1 .7.2 1.5.3 2.2.3.8 0 1.5-.1 2.2-.4.6-.2 1.3-.6 1.8-1-1.3-.8-2.3-2-2.8-3.5z"></path><path d="M12.5 22.8c-1.3-.6-2.4-1.6-3-2.9-.6-1.3-.8-2.7-.5-4.1-.2.5-.3 1-.3 1.5v2.8c0 1.2.3 2.4.8 3.5.5 1.1 1.3 2.1 2.2 2.8.8.7 1.8 1.2 2.9 1.5 1 .3 2.1.4 3.1.2-1.3-.7-2.4-1.7-3-3-.6-1.3-.8-2.7-.5-4.1-.1.4-.3.9-.3 1.4 0 1 .3 2 .8 2.9.5.9 1.1 1.6 1.9 2.2.8.5 1.6.9 2.6 1.1.9.2 1.8.2 2.7.1-1.2-.5-2.1-1.3-2.7-2.3-.6-1-1-2.2-.9-3.4 0 .3-.1.6-.1 1 0 .9.2 1.7.6 2.4.4.8 1 1.4 1.6 1.8.6.4 1.3.7 2.1.9.7.1 1.5.1 2.3 0-1-.3-1.8-1-2.4-1.8-.5-.8-.8-1.7-.8-2.7 0 .2 0 .4-.1.6-.1.6.1 1.2.3 1.8.2.5.6 1 1 1.3.4.3.9.5 1.4.7.5.1 1 .2 1.6.1-1.3-.1-2.4-.7-3.1-1.7-.7-1-1.1-2.2-1.1-3.5 0-.1 0-.2 0-.3.1 1.4.7 2.6 1.6 3.5.9.8 2.1 1.3 3.4 1.5-.9-1.2-1.5-2.6-1.6-4.1-.1-1.5.3-3 1-4.3-.4 1.3-.4 2.8 0 4.1.4 1.3 1.2 2.4 2.2 3.2z"></path></svg>
          <div className="badge-text" style={{textAlign: 'center', lineHeight: '1.2'}}>
            <div className="badge-title" style={{fontSize: '18px', fontWeight: 'bold', color: '#222'}}>Guest<br/>favourite</div>
          </div>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '32px', width: '32px', fill: 'currentcolor', transform: 'scaleX(-1)'}}><path d="M11 25.5c-2.4-1.2-4.2-3.3-5-5.8-.3-1.1-.5-2.2-.5-3.3v-4.5c0-1.8.8-3.4 2-4.6-2.5 1-4.7 2.8-6.1 5.2-.8 1.4-1.2 3.1-1.2 4.8v4.5c0 1.9.5 3.8 1.5 5.4 1 1.6 2.3 2.9 3.9 3.9.7.4 1.4.8 2.2 1 .7.2 1.5.3 2.2.3.8 0 1.5-.1 2.2-.4.6-.2 1.3-.6 1.8-1-1.3-.8-2.3-2-2.8-3.5z"></path><path d="M12.5 22.8c-1.3-.6-2.4-1.6-3-2.9-.6-1.3-.8-2.7-.5-4.1-.2.5-.3 1-.3 1.5v2.8c0 1.2.3 2.4.8 3.5.5 1.1 1.3 2.1 2.2 2.8.8.7 1.8 1.2 2.9 1.5 1 .3 2.1.4 3.1.2-1.3-.7-2.4-1.7-3-3-.6-1.3-.8-2.7-.5-4.1-.1.4-.3.9-.3 1.4 0 1 .3 2 .8 2.9.5.9 1.1 1.6 1.9 2.2.8.5 1.6.9 2.6 1.1.9.2 1.8.2 2.7.1-1.2-.5-2.1-1.3-2.7-2.3-.6-1-1-2.2-.9-3.4 0 .3-.1.6-.1 1 0 .9.2 1.7.6 2.4.4.8 1 1.4 1.6 1.8.6.4 1.3.7 2.1.9.7.1 1.5.1 2.3 0-1-.3-1.8-1-2.4-1.8-.5-.8-.8-1.7-.8-2.7 0 .2 0 .4-.1.6-.1.6.1 1.2.3 1.8.2.5.6 1 1 1.3.4.3.9.5 1.4.7.5.1 1 .2 1.6.1-1.3-.1-2.4-.7-3.1-1.7-.7-1-1.1-2.2-1.1-3.5 0-.1 0-.2 0-.3.1 1.4.7 2.6 1.6 3.5.9.8 2.1 1.3 3.4 1.5-.9-1.2-1.5-2.6-1.6-4.1-.1-1.5.3-3 1-4.3-.4 1.3-.4 2.8 0 4.1.4 1.3 1.2 2.4 2.2 3.2z"></path></svg>
        </div>
        <div className="badge-right flex items-center gap-6">
          <div className="badge-rating flex-col items-center">
            <span className="rating-num">4.95</span>
            <span className="rating-stars">★★★★★</span>
          </div>
          <div className="divider-vertical"></div>
          <div className="badge-reviews flex-col items-center">
            <span className="reviews-num">19</span>
            <span className="reviews-text">Reviews</span>
          </div>
        </div>
      </div>

      <hr className="my-8" />

      {/* Host Intro */}
      <div className="host-intro flex items-center gap-4">
        <img src={propertyData.host.image} alt={propertyData.host.name} className="host-avatar-large" />
        <div className="host-details">
          <div className="host-name">Hosted by {propertyData.host.name}</div>
          <div className="host-years">{propertyData.host.yearsHosting} years hosting</div>
        </div>
      </div>

      <hr className="my-8" />

      {/* Features */}
      <div className="features-list flex-col gap-6">
        {propertyData.features.map((feature, idx) => (
          <div key={idx} className="feature-item flex gap-4">
            <div className="feature-icon" style={{marginTop: '2px'}}>
               {idx === 0 && (
                 <svg viewBox="0 0 32 32" style={{display: 'block', height: '28px', width: '28px', fill: 'none', stroke: 'currentcolor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                   <path d="M6 24h20v2H6z" />
                   <path d="M10 24v-6h12v6" />
                   <path d="M16 18 C 12 14, 14 6, 16 4 C 18 6, 20 14, 16 18" />
                   <path d="M12 18 C 10 14, 11 10, 13 12" />
                   <path d="M20 18 C 22 14, 21 10, 19 12" />
                 </svg>
               )}
               {idx === 1 && (
                 <svg viewBox="0 0 32 32" style={{display: 'block', height: '28px', width: '28px', fill: 'none', stroke: 'currentcolor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                   <circle cx="16" cy="16" r="2" />
                   <path d="M16 14 C 10 6, 22 6, 16 14" />
                   <path d="M18 16 C 26 10, 26 22, 18 16" />
                   <path d="M16 18 C 22 26, 10 26, 16 18" />
                   <path d="M14 16 C 6 22, 6 10, 14 16" />
                 </svg>
               )}
               {idx === 2 && (
                 <svg viewBox="0 0 32 32" style={{display: 'block', height: '28px', width: '28px', fill: 'none', stroke: 'currentcolor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round'}}>
                   <path d="M4 28h24" />
                   <path d="M8 28V4h16v24" />
                   <path d="M8 28V4l10 2v22z" />
                   <line x1="15" y1="15" x2="15" y2="17" />
                 </svg>
               )}
            </div>
            <div className="feature-text">
              <div className="feature-title" style={{fontWeight: '600', color: 'var(--text-dark)', marginBottom: '2px'}}>{feature.title}</div>
              <div className="feature-desc" style={{color: 'var(--text-light)', fontSize: '15px'}}>{feature.description}</div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-8" />

      {/* Description */}
      <div className="description-section">
        <div className="translation-badge mb-4 flex items-center gap-1" style={{backgroundColor: '#f7f7f7', padding: '8px 12px', borderRadius: '8px', display: 'inline-flex', fontSize: '14px'}}>
          Some info has been automatically translated. <a href="#" style={{textDecoration: 'underline'}}>Show original</a>
        </div>
        <p className="description-text" style={{lineHeight: '1.6', fontSize: '16px'}}>
          {isDescExpanded ? fullDesc : shortDesc}
        </p>
        {!isDescExpanded ? (
          <button className="show-more-btn mt-4 flex items-center gap-1" onClick={() => setIsDescExpanded(true)}>
            <span style={{textDecoration: 'underline', fontWeight: '600'}}>Show more</span>
            <svg viewBox="0 0 18 18" style={{height: '12px', width: '12px', display: 'block', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
          </button>
        ) : (
          <button className="show-more-btn mt-4 flex items-center gap-1" onClick={() => setIsDescExpanded(false)}>
            <span style={{textDecoration: 'underline', fontWeight: '600'}}>Show less</span>
            <svg viewBox="0 0 18 18" style={{height: '12px', width: '12px', display: 'block', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
          </button>
        )}
      </div>

      <hr className="my-8" />
      
      {/* Sleep */}
      <div className="sleep-section">
        <h3 className="section-title mb-4">Where you'll sleep</h3>
        <div className="sleep-grid flex gap-4">
           <div className="sleep-card flex-col gap-2">
             <img src={propertyData.images[2]} alt="Bedroom" className="sleep-img" />
             <div className="sleep-title">Bedroom</div>
             <div className="sleep-desc">1 double bed</div>
           </div>
           <div className="sleep-card flex-col gap-2">
             <img src={propertyData.images[3]} alt="Living room" className="sleep-img" />
             <div className="sleep-title">Living room</div>
             <div className="sleep-desc">1 sofa</div>
           </div>
        </div>
      </div>

      <hr className="my-8" />
      
      {/* Amenities */}
      <div id="amenities" className="amenities-section">
        <h3 className="section-title mb-6" style={{fontSize: '22px', fontWeight: '600'}}>What this place offers</h3>
        <div className="amenities-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
          {propertyData.amenities.map((amenity, idx) => (
             <div key={idx} className={`amenity-item flex items-center gap-4 ${amenity.crossedOut ? 'text-gray-400 line-through' : 'text-gray-900'}`} style={amenity.crossedOut ? {color: '#717171', textDecoration: 'line-through'} : {color: '#222'}}>
               <div className="relative">
                 <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'currentcolor', stroke: 'none'}}>
                   {getIcon(amenity.icon)}
                 </svg>
                 {amenity.crossedOut && (
                   <svg viewBox="0 0 32 32" style={{position: 'absolute', top: 0, left: 0, height: '24px', width: '24px', stroke: 'currentcolor', strokeWidth: 1.5, fill: 'none'}}>
                     <path d="M4 28L28 4"></path>
                   </svg>
                 )}
               </div>
               <span className="amenity-name" style={{fontSize: '16px'}}>{amenity.name}</span>
             </div>
          ))}
        </div>
        <button className="show-all-amenities-btn mt-8" style={{border: '1px solid #222', backgroundColor: '#fff', padding: '13px 23px', borderRadius: '8px', fontWeight: '600', fontSize: '16px', color: '#222', cursor: 'pointer'}} onClick={() => setIsAmenitiesModalOpen(true)}>Show all 50 amenities</button>
      </div>
      
      {isAmenitiesModalOpen && <AmenitiesModal onClose={() => setIsAmenitiesModalOpen(false)} />}

      <hr className="my-8" />
      
      {/* Calendar (Static placeholder for now) */}
      <div className="calendar-section">
        <h3 className="section-title mb-2">5 nights in Candolim</h3>
        <p className="calendar-subtitle mb-6" style={{color: '#717171', fontSize: '14px'}}>18 Oct 2026 - 23 Oct 2026</p>
        <div className="calendar-placeholder flex" style={{ gap: '48px' }}>
           {/* Simple static calendar mock */}
           <div className="cal-month flex-col" style={{flex: 1}}>
             <div className="text-center font-semibold mb-4" style={{textAlign: 'center', marginBottom: '16px'}}>October 2026</div>
             <div className="cal-grid">
               {['S','M','T','W','T','F','S'].map(d => <div key={d} className="cal-day-header">{d}</div>)}
               {[...Array(31)].map((_, i) => (
                 <div key={i} className={`cal-day ${i+1 >= 18 && i+1 <= 23 ? 'selected-day' : ''}`}>
                   {i+1}
                 </div>
               ))}
             </div>
           </div>
           <div className="cal-month flex-col" style={{flex: 1}}>
             <div className="text-center font-semibold mb-4" style={{textAlign: 'center', marginBottom: '16px'}}>November 2026</div>
             <div className="cal-grid">
               {['S','M','T','W','T','F','S'].map(d => <div key={d} className="cal-day-header">{d}</div>)}
               {[...Array(30)].map((_, i) => <div key={i} className="cal-day">{i+1}</div>)}
             </div>
           </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px'}}><path d="M26 2h-4V0h-2v2H12V0h-2v2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 4h4v2h2V4h8v2h2V4h4v6H6V4zm0 24V12h20v16H6z"></path></svg>
          <button style={{textDecoration: 'underline', fontWeight: 600}}>Clear dates</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
