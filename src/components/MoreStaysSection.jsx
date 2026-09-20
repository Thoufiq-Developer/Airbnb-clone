import React, { useRef, useState } from 'react';
import { propertyData } from '../data/mockData';

const MoreStaysSection = () => {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((propertyData.moreStays?.length || 0) / 5);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' });
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
    }
  };

  if (!propertyData.moreStays || propertyData.moreStays.length === 0) return null;

  return (
    <div className="more-stays-section py-8">
      <div className="flex justify-between items-center mb-6" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
        <h2 className="text-2xl font-semibold text-gray-900" style={{fontSize: '22px', fontWeight: '600', color: '#222'}}>More stays nearby</h2>
        <div className="slider-controls" style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <span style={{fontSize: '14px', fontWeight: '500'}}>{currentPage} / {totalPages}</span>
          <div style={{display: 'flex', gap: '8px'}}>
            <button 
              onClick={scrollLeft} 
              disabled={currentPage === 1}
              style={{width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentPage === 1 ? 'default' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1}}
            >
              <svg viewBox="0 0 16 16" style={{height: '12px', width: '12px', fill: 'currentcolor'}}><path d="M10 2L4.5 8 10 14" fill="none" stroke="currentcolor" strokeWidth="2"></path></svg>
            </button>
            <button 
              onClick={scrollRight}
              disabled={currentPage === totalPages}
              style={{width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentPage === totalPages ? 'default' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1}}
            >
              <svg viewBox="0 0 16 16" style={{height: '12px', width: '12px', fill: 'currentcolor'}}><path d="M6 2l5.5 6L6 14" fill="none" stroke="currentcolor" strokeWidth="2"></path></svg>
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="stays-slider" 
        style={{
          display: 'flex', 
          gap: '24px', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE/Edge
        }}
      >
        <style>{`.stays-slider::-webkit-scrollbar { display: none; }`}</style>
        
        {propertyData.moreStays.map((stay, idx) => (
          <div key={idx} className="stay-card flex-col" style={{flex: '0 0 calc(20% - 19.2px)', scrollSnapAlign: 'start'}}>
            <div className="image-wrapper mb-3" style={{position: 'relative', paddingTop: '95%', overflow: 'hidden', borderRadius: '12px', marginBottom: '12px'}}>
              <img src={stay.image} alt={stay.title} style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <h3 className="stay-title mb-1 truncate" style={{fontSize: '15px', fontWeight: '600', color: '#222', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '4px'}}>{stay.title}</h3>
            <div className="stay-price" style={{fontSize: '15px', color: '#222'}}><span style={{fontWeight: '600'}}>₹{stay.price}</span> <span style={{color: '#717171'}}>night</span></div>
            <div className="stay-rating mt-1" style={{fontSize: '14px', color: '#222', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px'}}>
              ★ {stay.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreStaysSection;
