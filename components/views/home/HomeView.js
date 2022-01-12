import React from 'react';
import AboutUsComponent from '../../aboutus/AboutUsComponent';
import ContactComponent from '../../contact/ContactComponent';
import HomeCarouselComponent from '../../homeCarousel/HomeCarouselComponent';

function HomeView() {
  return (
    <div className="homeView">
      <HomeCarouselComponent />
      <AboutUsComponent />
      <ContactComponent />
    </div>
  );
}

export default HomeView;
