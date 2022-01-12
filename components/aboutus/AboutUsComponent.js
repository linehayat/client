import React from 'react';

import AboutUsSlide2 from './aboutUsSlides/AboutUsSlide2';
import AboutUsSlide3 from './aboutUsSlides/AboutUsSlide3';
import AboutUsSlide4 from './aboutUsSlides/AboutUsSlide4';
import AboutUsSlide5 from './aboutUsSlides/AboutUsSlide5';
import Button from 'react-bootstrap/Button';

function AboutUsComponent() {
  return (
    <div className="aboutus">
      <h1 id="aboutus">About LineHayat</h1>
      <br />
      <a name="aboutus" />
      <AboutUsSlide2 />
      <AboutUsSlide3 />
      <AboutUsSlide4 />
      <AboutUsSlide5 />
    </div>
  );
}

export default AboutUsComponent;
