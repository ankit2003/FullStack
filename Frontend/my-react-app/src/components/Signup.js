import React, { useState } from "react";
import styles from "./Signup.module.css"; // Import the CSS Module

function SignUp() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", { image });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="mb-3">
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            className={styles.input}
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="profileImage" className={styles.label}>
            Upload Profile Image
          </label>
          <input
            type="file"
            className={styles.input}
            id="profileImage"
            onChange={handleImageUpload}
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
