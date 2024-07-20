import React from "react";
import styles from "./Footer.module.css"; // Import the CSS Module

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
