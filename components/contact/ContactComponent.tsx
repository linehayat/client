import React from 'react';
import styles from '../../styles/Contact.module.css';
function ContactComponent() {
  return ( 
    <div className={styles.contact}>
      <div className={styles.connect}>
        <h1 id="contact" >Get Connected</h1>
        <div className={styles.contactText}>
          <p>We would love to hear from you!</p>
          <p>For any enquiries and feedback, please get in touch with us via:</p>
        </div>
        <div className = {styles.socials}>
          <a href="https://www.instagram.com/linehayat_usm">
            <img src='/images/contact/igIcon.svg'/>
            <p>@linehayat_usm</p>
          </a>
          <a href="https://www.linkedin.com/company/linehayatusm/">
            <img src='/images/contact/linkedInIcon.svg'/>
            <p>/linehayatusm</p>
          </a>
          <a href="https://www.facebook.com/linehayat.usm">
            <img src='/images/contact/fbIcon.svg'/>
            <p>/linehayat.usm</p>
          </a>
          <a href="mailto:linehayat@usm.my">
            <img src='/images/contact/emailIcon.svg'/>
            <p>linehayat@usm.my</p>
          </a>
        </div>
      </div>
      <div>
        <h1> Feedback to LineHayat </h1>
        <p >
          We are delighted to be able to help you in your most challenging time.
        </p>
        <p>
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
