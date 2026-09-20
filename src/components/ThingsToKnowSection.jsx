import React from 'react';

const ThingsToKnowSection = () => {
  return (
    <div className="things-to-know-section py-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900" style={{fontSize: '22px', fontWeight: '600', marginBottom: '24px'}}>Things to know</h2>
      
      <div className="things-grid" style={{display: 'flex', gap: '24px', alignItems: 'flex-start'}}>
        
        {/* Cancellation policy */}
        <div className="things-col" style={{flex: 1}}>
          <div style={{marginBottom: '16px'}}>
             <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '1.5'}}><rect x="4" y="6" width="24" height="22" rx="2"></rect><path d="M10 3v6m12-6v6M4 12h24M11 18l10 6m0-6-10 6"></path></svg>
          </div>
          <h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '12px', color: '#222'}}>Cancellation policy</h3>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '8px', lineHeight: '1.4'}}>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '16px'}}>Review this host's full policy for details.</p>
          <a href="#" style={{fontWeight: '600', textDecoration: 'underline', color: '#222', fontSize: '16px'}}>Learn more</a>
        </div>
        
        {/* House rules */}
        <div className="things-col" style={{flex: 1}}>
          <div style={{marginBottom: '16px'}}>
            <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '1.5'}}><circle cx="10" cy="16" r="4"></circle><path d="M14 16h14m-6-4v4m4-4v4"></path></svg>
          </div>
          <h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '12px', color: '#222'}}>House rules</h3>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '12px'}}>Check-in after 2:00 pm</p>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '12px'}}>Checkout before 11:00 am</p>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '16px'}}>3 guests maximum</p>
          <a href="#" style={{fontWeight: '600', textDecoration: 'underline', color: '#222', fontSize: '16px'}}>Learn more</a>
        </div>
        
        {/* Safety & property */}
        <div className="things-col" style={{flex: 1}}>
          <div style={{marginBottom: '16px'}}>
            <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '1.5'}}><path d="M16 2 4 7v8c0 7 6 13 12 15 6-2 12-8 12-15V7z"></path></svg>
          </div>
          <h3 style={{fontWeight: '600', fontSize: '16px', marginBottom: '12px', color: '#222'}}>Safety &amp; property</h3>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '12px'}}>Carbon monoxide alarm not reported</p>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '12px'}}>Smoke alarm not reported</p>
          <p style={{fontSize: '16px', color: '#222', marginBottom: '16px'}}>Exterior security cameras on property</p>
          <a href="#" style={{fontWeight: '600', textDecoration: 'underline', color: '#222', fontSize: '16px'}}>Learn more</a>
        </div>

      </div>
    </div>
  );
};

export default ThingsToKnowSection;
