import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center" style={{ height: '100%' }}>
        
        {/* Logo */}
        <div className="navbar-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" style={{height: '32px', width: 'auto'}} />
        </div>

        {/* Search Pill */}
        <div className="navbar-search">
          <button className="search-btn flex items-center gap-2">
            <svg viewBox="0 0 32 32" width="24" height="24" style={{display: 'block'}}>
              {/* Tree trunk */}
              <rect x="23" y="14" width="2" height="14" fill="#a1887f" />
              {/* Tree leaves */}
              <circle cx="24" cy="12" r="6" fill="#aed581" />
              <circle cx="21" cy="9" r="5" fill="#8bc34a" />
              {/* House base */}
              <rect x="6" y="12" width="14" height="16" fill="#eeeeee" />
              {/* Chimney */}
              <rect x="8" y="8" width="2" height="6" fill="#424242" />
              {/* Roof */}
              <polygon points="3,13 22,7 21,5 2,11" fill="#424242" />
              {/* Door */}
              <rect x="10" y="18" width="5" height="10" fill="#e53935" />
              <circle cx="14" cy="23" r="0.8" fill="#212121" />
              {/* Window / AC */}
              <rect x="16" y="14" width="3" height="4" fill="#ffffff" />
              <circle cx="17.5" cy="16" r="1" fill="#e0e0e0" />
              {/* Base plants */}
              <rect x="6" y="26" width="3" height="2" fill="#8bc34a" />
              <rect x="16" y="26" width="4" height="2" fill="#8bc34a" />
            </svg>
            Anywhere
          </button>
          <span className="divider"></span>
          <button className="search-btn">Anytime</button>
          <span className="divider"></span>
          <button className="search-btn search-add-guests" style={{paddingRight: '8px'}}>Add guests</button>
          <div className="search-icon-wrapper">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
              <g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g>
            </svg>
          </div>
        </div>

        {/* User Menu */}
        <div className="navbar-user-menu flex items-center gap-2">
          <a href="#" className="host-link" style={{padding: '12px'}}>Become a host</a>
          <button className="globe-btn flex items-center justify-center">
             <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 8.75zm-9.67 0H1.8a6.26 6.26 0 0 0 2.76 5.08 12.6 12.6 0 0 1-1.14-5.08zm4.51-7c-.71.16-1.73 2.61-1.88 5.5h3.9c-.15-2.9-1.17-5.34-1.88-5.5zm4.46 1.92a12.6 12.6 0 0 1 1.14 5.08h2.76a6.26 6.26 0 0 0-2.76-5.08zM1.8 7.25h2.76a12.6 12.6 0 0 1 1.14-5.08A6.26 6.26 0 0 0 1.8 7.25z"></path></svg>
          </button>
          <div className="profile-btn-circle flex items-center justify-center">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible'}}><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
