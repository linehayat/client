import React from 'react';
import styles from '../../styles/Footer.module.css';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="/chat">Chat </a>| 
      <a className={styles.link} href="/">About </a>| 
      <a className={styles.link} href="/#contact"> Contact </a>|
      <a className={styles.link} href="/faq"> FAQ </a>|
      <a className={styles.link} href="/privacy"> Privacy Policy </a>
    </footer>
  );
}

export default FooterComponent;
