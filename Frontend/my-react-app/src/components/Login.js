import React, { useState } from "react";
import styles from "./Login.module.css"; // Import the CSS Module

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className={styles["form-text"]}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            className={styles.input}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={styles["form-check-input"]}
            id="exampleCheck1"
          />
          <label className={styles["form-check-label"]} htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
