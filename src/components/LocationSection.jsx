import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <div className="location-section py-8">
      <h2 className="text-2xl font-semibold mb-2" style={{fontSize: '22px', fontWeight: '600', marginBottom: '8px'}}>Where you'll be</h2>
      <p className="text-gray-700 mb-6" style={{color: '#222', fontSize: '16px', marginBottom: '24px'}}>Candolim, Goa, India</p>
      
      {/* Map visual replica */}
      <div className="map-container relative w-full overflow-hidden mb-4" style={{height: '480px', backgroundColor: '#e6eee1', borderRadius: '12px', position: 'relative'}}>
        {/* Ocean on left */}
        <div className="map-ocean" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '40%', backgroundColor: '#b8dae9', clipPath: 'polygon(0 0, 100% 0, 60% 100%, 0 100%)' }}></div>
        
        {/* Radius circles */}
        <div className="map-circle" style={{ position: 'absolute', top: '30%', left: '25%', width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#cde0c5', opacity: '0.9' }}></div>
        <div className="map-circle" style={{ position: 'absolute', top: '45%', right: '25%', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#cde0c5', opacity: '0.9' }}></div>
        
        {/* Map grid lines (subtle) */}
        <div className="map-grid" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Center pin */}
        <div className="map-pin" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '48px', height: '48px', backgroundColor: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
          <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'white'}}><path d="M28 13.36V28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V13.36l12-9.6zM16 1.13 2 12.33v-3.2l14-11.2 14 11.2v3.2z"></path></svg>
        </div>
        
        {/* Map controls */}
        <div className="map-controls flex flex-col" style={{position: 'absolute', right: '16px', top: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', overflow: 'hidden'}}>
          <button style={{width: '32px', height: '32px', fontSize: '20px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', border: 'none'}}>+</button>
          <div style={{height: '1px', backgroundColor: '#ddd'}}></div>
          <button style={{width: '32px', height: '32px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', border: 'none'}}>-</button>
        </div>
        
        <div className="map-controls-left" style={{position: 'absolute', left: '16px', top: '16px'}}>
          <button style={{width: '32px', height: '32px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none'}}>
            <svg viewBox="0 0 18 18" style={{height: '14px', width: '14px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><circle cx="8" cy="8" r="5"></circle><line x1="11.5" y1="11.5" x2="16" y2="16"></line></svg>
          </button>
        </div>
      </div>
      
      <p className="text-sm text-gray-700 mb-8" style={{fontSize: '15px', color: '#222', marginBottom: '32px'}}>Exact location will be provided after booking.</p>
      
      <h3 className="font-semibold text-lg mb-2" style={{fontWeight: '600', fontSize: '16px', marginBottom: '8px'}}>Neighbourhood highlights</h3>
      <p className="text-gray-700 mb-4" style={{fontSize: '15px', color: '#222', marginBottom: '16px'}}>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
      
      <button className="flex items-center gap-1 font-semibold text-gray-900 hover:underline" style={{fontWeight: '600', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', padding: 0}}>
        Show more
        <svg viewBox="0 0 18 18" style={{height: '12px', width: '12px', display: 'block', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
      </button>
    </div>
  );
};

export default LocationSection;
