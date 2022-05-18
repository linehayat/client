import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Navigation.module.css';

function NavigationComponent() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.left}>
        <Link href="/"><img src='/images/navigation/lineHayatLogo.svg'/></Link>
        <div className={styles.navLinks}>
          <Link href="/chat" passHref><span className={styles.link} >Who We Are</span></Link>
          <Link href="/" passHref><span className={styles.link}>Reach Us</span></Link>
          <Link href="/faq" passHref><span className={styles.link}>Volunteer</span></Link>
          <Link href="/faq" passHref><span className={styles.link}>Support Us</span></Link>
          <Link href="/faq" passHref><span className={styles.link}>Resources</span></Link>
          <Link href="/faq" passHref><span className={styles.link}>FAQ</span></Link>
          <Link href="/faq" passHref><span className={styles.link}>Our Contacts</span></Link>
        </div>
      </div>
      <div className={styles.lang}>
        <button></button>
      </div>
    </nav>
  );
}

//Hi! So I'm working on the site again, and I just pushed the about us page, let me know if it looks right. I'm working on the navigation bar and I noticed that there's a "Reach Us" and "Our Contacts" link. Do you think there's another way to word these that might be less confusing?

export default NavigationComponent;
