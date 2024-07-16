import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Default from "./components/Default";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
