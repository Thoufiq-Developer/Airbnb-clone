import React from 'react';
import './ReserveCard.css';
import { propertyData } from '../data/mockData';

const ReserveCard = () => {
  return (
    <div className="reserve-card-wrapper">
      <div className="promo-banner flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'var(--primary-color)'}}><path d="M16 2l6 12 12 1-9 8 3 12-12-7-12 7 3-12-9-8 12-1z"></path></svg>
          <div>
            <div style={{fontWeight: 600, fontSize: '14px'}}>Get 10% off your next stay.</div>
            <a href="#" style={{textDecoration: 'underline', fontSize: '14px'}}>Terms apply</a>
          </div>
        </div>
        <button className="claim-btn">Claim</button>
      </div>

      <div className="reserve-card">
        <div className="card-header flex items-baseline gap-1 mb-4">
          <span className="price">₹28,499</span>
          <span className="per-night">for 5 nights</span>
        </div>

        <div className="booking-inputs">
          <div className="dates-input flex">
            <div className="check-in flex-col">
              <label>CHECK-IN</label>
              <span>10/18/2026</span>
            </div>
            <div className="check-out flex-col">
              <label>CHECKOUT</label>
              <span>10/23/2026</span>
            </div>
          </div>
          <div className="guests-input flex justify-between items-center">
            <div className="flex-col">
              <label>GUESTS</label>
              <span>2 guests</span>
            </div>
            <svg viewBox="0 0 16 16" style={{height: '16px', width: '16px'}}><path d="M12 5L8 9l-4-4"></path></svg>
          </div>
        </div>

        <div className="cancellation-info mt-4 text-center">
          Free cancellation before <span style={{fontWeight: 600}}>17 October</span>
        </div>

        <button className="reserve-btn mt-4">
          Reserve
        </button>

        <div className="charge-notice mt-4 text-center">
          You won't be charged yet
        </div>
      </div>

      <div className="report-listing flex justify-center mt-6">
        <button className="flex items-center gap-2">
          <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="M6 32V2h20l-6 10 6 10H6"></path></svg>
          <span style={{textDecoration: 'underline', fontSize: '14px'}}>Report this listing</span>
        </button>
      </div>
    </div>
  );
};

export default ReserveCard;
