import React from 'react';
import { propertyData } from '../data/mockData';

const HostSection = () => {
  return (
    <div className="host-section py-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900" style={{fontSize: '22px', fontWeight: '600', marginBottom: '24px'}}>Meet your host</h2>
      
      <div className="host-content flex gap-12" style={{display: 'flex', gap: '48px', alignItems: 'flex-start'}}>
        
        {/* Left Side: Host Card & info below it */}
        <div className="host-left flex-col" style={{flex: '1', minWidth: '340px', maxWidth: '400px'}}>
          <div className="host-card p-6" style={{backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.12)', border: '1px solid #ebebeb', display: 'flex', alignItems: 'center'}}>
            
            {/* Left side of card (Avatar & Name) */}
            <div className="host-card-left flex-col items-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1}}>
              <div className="relative mb-2" style={{position: 'relative'}}>
                <div style={{width: '104px', height: '104px', borderRadius: '50%', backgroundColor: '#1d4d42', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                  <span style={{letterSpacing: '1px', fontSize: '10px', textAlign: 'center'}}>MIRASHYA<br/>HOMES</span>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white" style={{position: 'absolute', bottom: '0', right: '0', backgroundColor: '#e51d53', width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', color: 'white'}}>
                  <svg viewBox="0 0 16 16" style={{height: '16px', width: '16px', fill: 'currentcolor'}}><path d="M13.1 4.3 6.6 10.8l-3.7-3.7-1.4 1.4 5.1 5.1L14.5 5.7z"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold mt-4" style={{fontSize: '24px', fontWeight: '600', lineHeight: '1.2'}}>Mirashya</h3>
              <h3 className="text-2xl font-semibold mb-1" style={{fontSize: '24px', fontWeight: '600', lineHeight: '1.2'}}>Homes</h3>
              <p className="text-sm font-semibold text-gray-500" style={{fontSize: '14px', fontWeight: '600', color: '#717171', marginTop: '8px'}}>Host</p>
            </div>
            
            {/* Right side of card (Stats) */}
            <div className="host-card-right flex-col pl-6" style={{display: 'flex', flexDirection: 'column', gap: '20px', flex: 1}}>
              <div>
                <div className="font-bold text-xl" style={{fontSize: '20px', fontWeight: '700', color: '#222'}}>{propertyData.host.reviews}</div>
                <div className="text-xs font-semibold" style={{fontSize: '12px', fontWeight: '600', color: '#222'}}>Reviews</div>
              </div>
              <div>
                <div className="font-bold text-xl flex items-center gap-1" style={{fontSize: '20px', fontWeight: '700', color: '#222'}}>{propertyData.host.rating}<span style={{fontSize: '14px'}}>★</span></div>
                <div className="text-xs font-semibold" style={{fontSize: '12px', fontWeight: '600', color: '#222'}}>Rating</div>
              </div>
              <div>
                <div className="font-bold text-xl" style={{fontSize: '20px', fontWeight: '700', color: '#222'}}>{propertyData.host.yearsHosting}</div>
                <div className="text-xs font-semibold" style={{fontSize: '12px', fontWeight: '600', color: '#222'}}>Years hosting</div>
              </div>
            </div>
          </div>
          
          <div className="host-info-bullets mt-6 flex-col gap-4" style={{display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px'}}>
            <div className="flex items-start gap-4" style={{display: 'flex', alignItems: 'center', gap: '16px', color: '#222'}}>
              <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><circle cx="16" cy="12" r="8"></circle><path d="M16 20v10"></path><path d="M12 26h8"></path></svg>
              <span style={{fontSize: '16px'}}>{propertyData.host.born}</span>
            </div>
            <div className="flex items-start gap-4" style={{display: 'flex', alignItems: 'center', gap: '16px', color: '#222'}}>
              <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: 'currentcolor', strokeWidth: '2'}}><path d="M16 3l14 8-14 8-14-8 14-8z"></path><path d="M6 14v8c0 3 4 5 10 5s10-2 10-5v-8"></path><path d="M26 14v10"></path></svg>
              <span style={{fontSize: '16px'}}>Where I went to school: {propertyData.host.school}</span>
            </div>
          </div>
        </div>
        
        {/* Right Side: Co-hosts, Details, Button */}
        <div className="host-right flex-col" style={{flex: '1.5', minWidth: '400px'}}>
          <h3 className="font-semibold mb-4" style={{fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#222'}}>Co-Hosts</h3>
          <div className="co-hosts-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px'}}>
            {propertyData.host.coHosts.map((ch, idx) => (
              <div key={idx} className="co-host-item" style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                {ch.image ? (
                  <img src={ch.image} alt={ch.name} style={{width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover'}} />
                ) : (
                  <div style={{width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f0e6e6', color: '#e51d53', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '600'}}>{ch.name.charAt(0)}</div>
                )}
                <span style={{fontSize: '15px', color: '#222'}}>{ch.name}</span>
              </div>
            ))}
          </div>
          
          <h3 className="font-semibold mb-2" style={{fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#222'}}>Host details</h3>
          <p className="mb-1" style={{fontSize: '16px', color: '#222'}}>{propertyData.host.responseRate ? `Response rate: ${propertyData.host.responseRate}` : 'Response rate: 100%'}</p>
          <p className="mb-6" style={{fontSize: '16px', color: '#222'}}>{propertyData.host.responseTime ? propertyData.host.responseTime : 'Responds within an hour'}</p>
          
          <button className="bg-gray-100 text-gray-900 font-semibold rounded-lg px-6 py-3 hover:bg-gray-200 transition" style={{backgroundColor: '#f7f7f7', color: '#222', border: '1px solid #222', padding: '13px 23px', borderRadius: '8px', fontWeight: '600', fontSize: '16px', cursor: 'pointer', marginBottom: '32px'}}>Message host</button>
          
          <div className="flex gap-4 border-t border-gray-200 pt-6" style={{borderTop: '1px solid #ebebeb', paddingTop: '24px', display: 'flex', alignItems: 'center', gap: '12px'}}>
            <svg viewBox="0 0 32 32" style={{height: '24px', width: '24px', fill: 'none', stroke: '#717171', strokeWidth: '1.5'}}><path d="M16 31c-8-4-11.5-10-11.5-17V5.5l11.5-3.5 11.5 3.5V14c0 7-3.5 13-11.5 17z"></path></svg>
            <p className="text-xs text-gray-500" style={{fontSize: '12px', color: '#717171'}}>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HostSection;
