import React from 'react';
import image from '../../../public/About Us Page 5.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUsSlide3(props) {
  // const languageContext = useContext(LanguageContext);
  // let faq = faqJson.en;
  // if (languageContext.language === 'my') {
  //   faq = faqJson.my;
  // }
  return (
    <div className="slide1ContentPositioning">
      <div>
        <h2>What To Expect:</h2>
        <div style={{ marginTop: '5%', textAlign: 'center' }}>
          <p>You are ensured that:</p>
          <p>
            We <span className="highlight">don’t judge</span>
          </p>
          <p>
            We <span className="highlight">won’t tell you what to do</span>
          </p>
          <p>
            Everything is{' '}
            <span className="highlight">confidential and anonymous.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSlide3;
