import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Footer.module.css';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <Link href="/chat" passHref><span className={styles.link}>Chat</span></Link>
      <Link href="/" passHref><span className={styles.link}>About</span></Link>
      <Link href="/#contact" passHref><span className={styles.link}>Contact</span></Link>
      <Link href="/faq" passHref><span className={styles.link}>FAQ</span></Link>
      <Link href="/privacy" passHref><span className={styles.link}>Privacy Policy</span></Link>
    </footer>
  );
}

export default FooterComponent;
