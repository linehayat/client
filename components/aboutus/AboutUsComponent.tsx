import React from 'react';
import styles from '../../styles/AboutUs.module.css';
const float1 = require('../../assets/images/aboutus/float1.gif').default.src;
const float2 = require('../../assets/images/aboutus/float2.gif').default.src;
const ear = require('../../assets/images/aboutus/listening-ear.svg').default.src;

function AboutUsComponent() {
  return (
    <div className={styles.aboutUs}>
      <h1 id="aboutus">About LineHayat</h1>
      <div className={[styles.split, styles.reverse].join(' ')}>
        <div className={styles.image}>
          <img src={float1} alt="Space boy" />
        </div>
        <div className={styles.text}>
          <h2>Who We Are:</h2>
          <p>
            LineHayat is a Listening Service that aims to provide peer support to
            Universiti Sains Malaysia (USM) students.
          </p>
          <p>
            This service is run by students for students to ensure comfortable
            communication and it is completely free-of-charge.
          </p>
          <p>
            We also understand the need to maintain privacy when it comes to
            talking about problems.
          </p>
          <p>Therefore, we are established on these three main ideas:</p>
          <ul>
            <li >
              <p>Anonymous peer support</p>
            </li>
            <li >
              <p>Trained volunteerism</p>
            </li>
            <li >
              <p>Peer capacity building</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.split}>
        <div className={styles.image}>
          <img src={float2} alt="Space girl" />
        </div>
        <div className={styles.text}>
          <h2>Who We Are Not:</h2>
          <p>
            LineHayat is not a counselling or a professional mental health
            service.
          </p>
          <p>
            We are not associated with any mental health professionals such as
            psychologists, psychiatrists, counsellors, therapists, or social
            workers.
          </p>
          <p>We are volunteers that provide only emotional support.</p>
          <p>Sharers should always seek professional help if possible.</p>
        </div>
      </div>

      <div className={[styles.split, styles.reverse].join(' ')}>
        <div className={styles.image}>
          <img src={ear} alt="Listening ear" id="listeningEar" />
        </div>
        <div className={styles.text}>
          <h2>What We Do:</h2>
          <p>We are always here to lend a listening ear on for whatever you may be facing right now.</p>
          <p>Feel free to reach us through our Live Chat service.</p>
          <p>You may want to talk about:</p>
          <ul>
            <li>
              <p>Study stress</p>
            </li>
            <li>
              <p>Confusions</p>
            </li>
            <li>
              <p>Feeling lost/alone/empty</p>
            </li>
            <li>
              <p>Life challenges</p>
            </li>
            <li>
              <p>Anything that concerns you</p>
            </li>
          </ul>
        </div>
      </div>
      <h4>#You Share, We Care</h4>
    </div>
  );
}

export default AboutUsComponent;
