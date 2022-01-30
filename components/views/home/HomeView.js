import React from 'react';
import styles from './HomeView.module.css'
import AboutUsComponent from '../../aboutus/AboutUsComponent';
import ContactComponent from '../../contact/ContactComponent';
import HomeCarouselComponent from '../../homeCarousel/HomeCarouselComponent';

function HomeView() {
  return (
    <div className={styles.homeView}>
      <HomeCarouselComponent />
      <AboutUsComponent />
      <ContactComponent />
    </div>
  );
}

export default HomeView;
