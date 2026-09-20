import React from 'react';
import './ReviewsSection.css';
import { getIcon } from '../utils/icons';

const mockReviews = [
  { name: 'Amit', date: '2 weeks ago', text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.' },
  { name: 'Aheesh', date: '2 weeks ago', text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.', showMore: true },
  { name: 'Samiksha', date: 'May 2026', text: 'the host nitish was really great help' },
  { name: 'Vedant', date: 'May 2026', text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine...', showMore: true },
  { name: 'Vaibhav S', date: 'May 2026', text: 'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.' },
  { name: 'Mohd', date: 'May 2026', text: 'Great place. Exactly as described in the listing.' }
];

const ratingCategories = [
  { name: 'Cleanliness', score: '5.0', icon: 'cleaning' },
  { name: 'Accuracy', score: '5.0', icon: 'checkcircle' },
  { name: 'Check-in', score: '5.0', icon: 'key' },
  { name: 'Communication', score: '5.0', icon: 'chat' },
  { name: 'Location', score: '4.8', icon: 'map' },
  { name: 'Value', score: '4.8', icon: 'tag' }
];

const reviewFilters = [
  { name: 'Comfort', count: '6', icon: 'bed' },
  { name: 'Accuracy', count: '5', icon: 'checkcircle' },
  { name: 'Hot tub', count: '5', icon: 'hottub' },
  { name: 'Condition', count: '4', icon: 'condition' },
  { name: 'Hospitality', count: '8', icon: 'hospitality' },
  { name: 'Cleanliness', count: '4', icon: 'cleaning' },
  { name: 'Amenities', count: '2', icon: 'amenities' }
];

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <div className="reviews-header flex-col items-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '48px'}}>
        <div className="wreath-rating flex items-center justify-center gap-6" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px'}}>
          <svg viewBox="0 0 32 32" style={{height: '90px', width: '90px', fill: 'currentcolor', color: '#222', transform: 'scaleX(-1)'}}>
            <path d="M11 25.5c-2.4-1.2-4.2-3.3-5-5.8-.3-1.1-.5-2.2-.5-3.3v-4.5c0-1.8.8-3.4 2-4.6-2.5 1-4.7 2.8-6.1 5.2-.8 1.4-1.2 3.1-1.2 4.8v4.5c0 1.9.5 3.8 1.5 5.4 1 1.6 2.3 2.9 3.9 3.9.7.4 1.4.8 2.2 1 .7.2 1.5.3 2.2.3.8 0 1.5-.1 2.2-.4.6-.2 1.3-.6 1.8-1-1.3-.8-2.3-2-2.8-3.5z"></path>
            <path d="M12.5 22.8c-1.3-.6-2.4-1.6-3-2.9-.6-1.3-.8-2.7-.5-4.1-.2.5-.3 1-.3 1.5v2.8c0 1.2.3 2.4.8 3.5.5 1.1 1.3 2.1 2.2 2.8.8.7 1.8 1.2 2.9 1.5 1 .3 2.1.4 3.1.2-1.3-.7-2.4-1.7-3-3-.6-1.3-.8-2.7-.5-4.1-.1.4-.3.9-.3 1.4 0 1 .3 2 .8 2.9.5.9 1.1 1.6 1.9 2.2.8.5 1.6.9 2.6 1.1.9.2 1.8.2 2.7.1-1.2-.5-2.1-1.3-2.7-2.3-.6-1-1-2.2-.9-3.4 0 .3-.1.6-.1 1 0 .9.2 1.7.6 2.4.4.8 1 1.4 1.6 1.8.6.4 1.3.7 2.1.9.7.1 1.5.1 2.3 0-1-.3-1.8-1-2.4-1.8-.5-.8-.8-1.7-.8-2.7 0 .2 0 .4-.1.6-.1.6.1 1.2.3 1.8.2.5.6 1 1 1.3.4.3.9.5 1.4.7.5.1 1 .2 1.6.1-1.3-.1-2.4-.7-3.1-1.7-.7-1-1.1-2.2-1.1-3.5 0-.1 0-.2 0-.3.1 1.4.7 2.6 1.6 3.5.9.8 2.1 1.3 3.4 1.5-.9-1.2-1.5-2.6-1.6-4.1-.1-1.5.3-3 1-4.3-.4 1.3-.4 2.8 0 4.1.4 1.3 1.2 2.4 2.2 3.2z"></path>
          </svg>
          <span className="big-rating" style={{fontSize: '110px', fontWeight: '800', color: '#222', letterSpacing: '-4px', lineHeight: '1'}}>4.95</span>
          <svg viewBox="0 0 32 32" style={{height: '90px', width: '90px', fill: 'currentcolor', color: '#222'}}>
            <path d="M11 25.5c-2.4-1.2-4.2-3.3-5-5.8-.3-1.1-.5-2.2-.5-3.3v-4.5c0-1.8.8-3.4 2-4.6-2.5 1-4.7 2.8-6.1 5.2-.8 1.4-1.2 3.1-1.2 4.8v4.5c0 1.9.5 3.8 1.5 5.4 1 1.6 2.3 2.9 3.9 3.9.7.4 1.4.8 2.2 1 .7.2 1.5.3 2.2.3.8 0 1.5-.1 2.2-.4.6-.2 1.3-.6 1.8-1-1.3-.8-2.3-2-2.8-3.5z"></path>
            <path d="M12.5 22.8c-1.3-.6-2.4-1.6-3-2.9-.6-1.3-.8-2.7-.5-4.1-.2.5-.3 1-.3 1.5v2.8c0 1.2.3 2.4.8 3.5.5 1.1 1.3 2.1 2.2 2.8.8.7 1.8 1.2 2.9 1.5 1 .3 2.1.4 3.1.2-1.3-.7-2.4-1.7-3-3-.6-1.3-.8-2.7-.5-4.1-.1.4-.3.9-.3 1.4 0 1 .3 2 .8 2.9.5.9 1.1 1.6 1.9 2.2.8.5 1.6.9 2.6 1.1.9.2 1.8.2 2.7.1-1.2-.5-2.1-1.3-2.7-2.3-.6-1-1-2.2-.9-3.4 0 .3-.1.6-.1 1 0 .9.2 1.7.6 2.4.4.8 1 1.4 1.6 1.8.6.4 1.3.7 2.1.9.7.1 1.5.1 2.3 0-1-.3-1.8-1-2.4-1.8-.5-.8-.8-1.7-.8-2.7 0 .2 0 .4-.1.6-.1.6.1 1.2.3 1.8.2.5.6 1 1 1.3.4.3.9.5 1.4.7.5.1 1 .2 1.6.1-1.3-.1-2.4-.7-3.1-1.7-.7-1-1.1-2.2-1.1-3.5 0-.1 0-.2 0-.3.1 1.4.7 2.6 1.6 3.5.9.8 2.1 1.3 3.4 1.5-.9-1.2-1.5-2.6-1.6-4.1-.1-1.5.3-3 1-4.3-.4 1.3-.4 2.8 0 4.1.4 1.3 1.2 2.4 2.2 3.2z"></path>
          </svg>
        </div>
        <h3 className="guest-favourite-title mt-4" style={{fontSize: '22px', fontWeight: '600', color: '#222', marginTop: '16px', marginBottom: '8px'}}>Guest favourite</h3>
        <p className="guest-favourite-subtitle" style={{fontSize: '18px', color: '#717171', marginBottom: '12px'}}>This home is a guest favourite based on ratings, reviews and<br/>reliability</p>
        <a href="#" className="how-reviews-work mt-2" style={{fontSize: '16px', color: '#222', textDecoration: 'underline', fontWeight: '600'}}>How reviews work</a>
      </div>

      <div className="ratings-grid flex justify-between mt-8">
        <div className="rating-category flex-col">
          <span className="category-label">Overall rating</span>
          <div className="rating-bars flex-col gap-1 mt-2">
            {[5,4,3,2,1].map((val) => (
               <div key={val} className="flex items-center gap-2">
                 <span style={{fontSize: '10px'}}>{val}</span>
                 <div className="bar-track" style={{width: '100px', height: '4px', backgroundColor: '#ddd', borderRadius: '2px'}}>
                   {val === 5 && <div className="bar-fill" style={{width: '90%', height: '100%', backgroundColor: '#222', borderRadius: '2px'}}></div>}
                   {val === 4 && <div className="bar-fill" style={{width: '10%', height: '100%', backgroundColor: '#222', borderRadius: '2px'}}></div>}
                 </div>
               </div>
            ))}
          </div>
        </div>
        
        {ratingCategories.map((cat, idx) => (
          <div key={idx} className="rating-category flex-col">
            <span className="category-label">{cat.name}</span>
            <span className="category-score mt-2">{cat.score}</span>
            <svg viewBox="0 0 32 32" className="category-icon mt-2" style={{height: '32px', width: '32px', fill: 'currentcolor', stroke: 'none'}}>
              {getIcon(cat.icon)}
            </svg>
          </div>
        ))}
      </div>

      <div className="review-filters flex gap-4 mt-8" style={{overflowX: 'auto', paddingBottom: '8px'}}>
         {reviewFilters.map((f, i) => (
           <button key={i} className="filter-pill flex items-center gap-2">
             <svg viewBox="0 0 32 32" style={{height: '16px', width: '16px', fill: 'currentcolor', stroke: 'none'}}>
               {getIcon(f.icon)}
             </svg>
             <span style={{fontWeight: '600'}}>{f.name}</span>
             <span style={{color: '#717171'}}>{f.count}</span>
           </button>
         ))}
      </div>

      <div className="reviews-grid mt-8">
        {mockReviews.map((rev, idx) => (
          <div key={idx} className="review-card">
            <div className="reviewer-info flex items-center gap-4 mb-4">
               <div className="reviewer-avatar">{rev.name.charAt(0)}</div>
               <div className="flex-col">
                 <span className="reviewer-name">{rev.name}</span>
                 <span className="reviewer-date">{rev.date}</span>
               </div>
            </div>
            <div className="review-stars text-sm mb-2">★★★★★</div>
            <p className="review-text">{rev.text}</p>
            {rev.showMore && <button className="show-more-review mt-2">Show more</button>}
          </div>
        ))}
      </div>
      
      <button className="show-all-reviews-btn mt-8">Show all 19 reviews</button>
    </div>
  );
};

export default ReviewsSection;
