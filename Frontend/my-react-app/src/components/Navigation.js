import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Navigation.module.css"; // Import the CSS Module

function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={`${styles.navLink} ${styles.active}`} to="/Home">
          Home
        </Link>
        <Link className={styles.navLink} to="/login">
          Login
        </Link>
        <Link className={styles.navLink} to="/signup">
          Signup
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
