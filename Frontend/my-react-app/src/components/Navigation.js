import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="nav">
        <Link className="nav-link active" to="/"></Link>
        <Link className="nav-link " to="Home">
          Home
        </Link>
        <Link className="nav-link " to="Login">
          Login
        </Link>
        <Link className="nav-link " to="Signup">
          Signup
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
