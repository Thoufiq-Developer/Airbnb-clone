import React, { useState } from 'react';
import './ListingHeader.css';

const ListingHeader = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const toggleSave = () => {
    if (isSaved) {
      setIsSaved(false);
      showToast('Removed from waitlist');
    } else {
      setIsSaved(true);
      showToast('Saved to waitlist');
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className="listing-header flex justify-between items-end mb-4 relative">
      <h1 className="listing-title">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
      
      <div className="listing-actions flex gap-4">
        <button className="action-btn flex items-center gap-2 hover:bg-gray-100 px-2 py-2 rounded-lg transition-colors">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible'}}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
          <span style={{textDecoration: 'underline'}}>Share</span>
        </button>
        <button 
          className="action-btn flex items-center gap-2 transition-colors" 
          onClick={toggleSave}
          style={{
            backgroundColor: isSaved ? '#f7f7f7' : 'transparent',
            padding: '8px 12px',
            borderRadius: '8px'
          }}
        >
          {isSaved ? (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: '#ff385c', height: '16px', width: '16px', stroke: '#ff385c', strokeWidth: '2', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          ) : (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '2', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          )}
          <span style={{textDecoration: 'underline'}}>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#222',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000,
          fontWeight: '500',
          fontSize: '14px'
        }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ListingHeader;
