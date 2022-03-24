import React from 'react';
import styles from '../../styles/AboutUs.module.css';
const float1 = require('../../assets/images/aboutus/float1.gif').default.src;
const float2 = require('../../assets/images/aboutus/float2.gif').default.src;
const nojudging = require('../../assets/images/aboutus/no-judging.svg').default.src;

function AboutUsComponent() {
  return (
    <div className={styles.aboutUs}>
      <h1 id="aboutus">About LineHayat</h1>
      <div className={[styles.split, styles.reverse].join(' ')}>
        <div className={styles.image}>
          <img src={float1} alt="Space boy on the phone" />
        </div>
        <div className={styles.text}>
          <h2>Who We Are</h2>
          <div>
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
                Anonymous peer support
              </li>
              <li >
                Trained volunteerism
              </li>
              <li >
                Peer capacity building
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.split}>
        <div className={styles.image}>
          <img src={float2} alt="Space girl on the phone" />
        </div>
        <div className={styles.text}>
          <h2>Who We Are Not</h2>
          <div>
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
      </div>

      <div>
        <div className={styles.centeredText}>
          <h2>What We Do</h2>
          <div>
            <div>
              <p>We are always here to lend a listening ear on for whatever you may be facing right now.</p>
              <p>Feel free to reach us through our Live Chat service.</p>
              <p>You may want to talk about:</p>
            </div>
            <ul>
              <li>
                Study stress
              </li>
              <li>
                Confusions
              </li>
              <li>
                Feeling lost/alone/empty
              </li>
              <li>
                Life challenges
              </li>
              <li>
                Anything that concerns you
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.centeredImage}>
          <img src={nojudging} alt="Happy people talking" />
        </div>
        <h4>#You Share, We Care</h4>
      </div>
    </div>
  );
}

export default AboutUsComponent;
