import React from 'react';
import styles from '../../styles/Navigation.module.css';

function NavigationComponent() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.left}>
        <a href="/"><img src='/images/navigation/lineHayatLogo.svg'/></a>
        <div className={styles.navLinks}>
          <a className={[styles.link, styles.chat].join(' ')} href="/chat">Chat</a>
          <a className={styles.link} href="/">About</a>
          <a className={styles.link} href="/faq">FAQ</a>
        </div>
      </div>
      <div className={styles.lang}>
        <button></button>
      </div>
    </nav>
  );
}

export default NavigationComponent;
