import React from 'react';
import image from '../../../public/About Us Page 3.gif';
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
      <h2>Who We Are Not:</h2>
      <div>
        <p>
          Line Hayat is not a counselling or a professional mental health
          service.
        </p>
        <p>
          We are not associated with any mental health professionals such as
          psychologists, psychiatrists, counsellors, therapists, or social
          workers.
        </p>
        <p>We are volunteers that provide only emotional support.</p>
        <p>Users should always seek professional help if possible.</p>
      </div>
    </div>
  );
}

export default AboutUsSlide3;
