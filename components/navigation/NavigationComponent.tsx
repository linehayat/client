import React from 'react';
import styles from '../../styles/Navigation.module.css';
const logo = require('../../assets/images/navigation/lineHayatLogo.svg').default.src;

function NavigationComponent() {
  return (
    <nav className={styles.navBar}>
       <a href="/"><img src={logo}/></a>
      <div className={styles.navLinks}>
        <a className={styles.link} href="/chat">Chat</a>
        <a className={styles.link} href="/">About</a>
        <a className={styles.link} href="/faq">FAQ</a>
      </div>
    </nav>
  );
}

export default NavigationComponent;
