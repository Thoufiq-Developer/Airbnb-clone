import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StickyNav from './components/StickyNav';
import ListingHeader from './components/ListingHeader';
import ImageGallery from './components/ImageGallery';
import PropertyInfo from './components/PropertyInfo';
import ReserveCard from './components/ReserveCard';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import HostSection from './components/HostSection';
import ThingsToKnowSection from './components/ThingsToKnowSection';
import MoreStaysSection from './components/MoreStaysSection';
import PhotoTour from './components/PhotoTour';
import Lightbox from './components/Lightbox';

function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <Navbar />
      <StickyNav />
      <main className="container mt-4">
        <ListingHeader />
        <div id="photos">
          <ImageGallery 
            onOpenPhotoTour={() => setIsPhotoTourOpen(true)} 
            onOpenLightbox={openLightbox} 
          />
        </div>
        
        <div className="main-content flex mt-8 gap-6" style={{ alignItems: 'flex-start' }}>
          <div className="left-column" style={{ flex: '1 1 65%' }}>
            <PropertyInfo />
          </div>
          <div className="right-column" style={{ flex: '1 1 35%', position: 'sticky', top: '100px' }}>
            <ReserveCard />
          </div>
        </div>

        <hr className="my-8" />
        <div id="reviews">
          <ReviewsSection />
        </div>
        
        <hr className="my-8" />
        <div id="location">
          <LocationSection />
        </div>
        
        <hr className="my-8" />
        <HostSection />
        
        <hr className="my-8" />
        <ThingsToKnowSection />
        
        <hr className="my-8" />
        <MoreStaysSection />
      </main>

      {isPhotoTourOpen && (
        <PhotoTour 
          onClose={() => setIsPhotoTourOpen(false)} 
          onOpenLightbox={openLightbox} 
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox 
          initialIndex={lightboxIndex} 
          onClose={closeLightbox} 
        />
      )}
    </>
  );
}

export default App;
