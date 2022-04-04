import React from 'react';
import styles from '../../styles/AboutUs.module.css';

function AboutUsComponent() {
  return (
    <div className={styles.aboutUs}>
      <h1 id="aboutus">About LineHayat</h1>
      <div className={[styles.split, styles.reverse].join(' ')}>
        <div className={styles.image}>
          <img src='/images/aboutus/float1.gif' alt="Space boy on the phone" />
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
          <img src='/images/aboutus/float2.gif' alt="Space girl on the phone" />
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

      <div className={[styles.split, styles.reverse].join(' ')}>
        <div className={styles.image}>
          <img src='/images/aboutus/listening-ear.svg' alt="Listening Ear" />
        </div>
        <div className={styles.text}>
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
          <h4>#You Share, We Care</h4>
          </div>
        </div>
      </div>

      <div className={styles.splitMid}>
        <div className={[styles.image, styles.imagePadding].join(' ')}>
          <img src="/images/aboutus/no-judging.svg" alt="No judging" />
        </div>
        <div className={[styles.text, styles.center].join(' ')}>
          <h2>What To Expect:</h2>
          <p>You are ensured that:</p>
          <p>
            We <span>don't judge</span>
          </p>
          <p>
            We <span>won't tell you what to do</span>
          </p>
          <p>
            Everything is <span>confidential and anonymous</span>
          </p>
        </div>
      </div>
    
      <img src='/images/contact/paperPlane.svg' alt="Paper plane" className={styles.paperPlane}/>
    </div>
  );
}

export default AboutUsComponent;
