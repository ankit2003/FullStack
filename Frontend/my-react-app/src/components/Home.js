import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>Home Page</h2>
      <p>Welcome to the Home Page! We are glad to have you here.</p>
    </div>
  );
}

export default Home;
