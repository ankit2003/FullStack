// SignUp.js

import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="profileImage" className="form-label">
          Upload Profile Image
        </label>
        <input
          type="file"
          className="form-control"
          id="profileImage"
          onChange={handleImageUpload}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
