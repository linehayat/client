import React from 'react';
import styles from '../../styles/Contact.module.css';
const paperPlane = require('../../assets/images/contact/paperPlane.svg').default.src;
const email = require('../../assets/images/contact/emailIcon.svg').default.src;
const insta = require('../../assets/images/contact/igIcon.svg').default.src;
const linkedIn = require('../../assets/images/contact/linkedInIcon.svg').default.src;
const fb = require('../../assets/images/contact/fbIcon.svg').default.src;

function ContactComponent() {
  return ( 
    <div className={styles.contact}>
      <img src={paperPlane} alt="Paper plane" className={styles.paperPlane}/>
      <h1 id="contact" >Get Connected</h1>
      <div className={styles.contactText}>
        <p>We would love to hear from you!</p>
        <p>For any enquiries and feedback, please get in touch with us via:</p>
      </div>
      <div className = {styles.socials}>
        <a href="https://www.instagram.com/linehayat_usm">
          <img src={insta}/>
        </a>
        <a href="https://www.linkedin.com/company/linehayatusm/">
          <img src={linkedIn}/>
        </a>
        <a href="https://www.facebook.com/linehayat.usm">
          <img src={fb}/>
        </a>
        <a href="mailto:linehayat@usm.my">
          <img src={email}/>
        </a>
      </div>
      <div >
        <h1 id="contact" >Feedback to LineHayat </h1>
        <p >
          We are delighted to be able to help you in your most challenging time.
          If you have used our service, it would be wonderful to know your
          experience to provide better services in the future.
        </p>
        <p >
          Worry not, as we promise a completely confidential service, your
          comments would be anonymous.
        </p>
        <div >
          <a href="https://docs.google.com/forms/d/1sS2esF4vrfVe9bhoo0TBOn4rrPTSpCGnwfbSiKOZINY/viewform?edit_requested=true" />
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
