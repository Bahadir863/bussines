// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title="Welcome to Our Physiotherapy Clinic"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route
            path="/about"
            element={
              <About
                title="About Physiotherapy"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">op1</Link>
        </li>
        <li>
          <Link to="/services">op2</Link>
        </li>
        <li>
          <Link to="/about">op3</Link>
        </li>
        <li>
          <Link to="/contact">op4</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = ({ title, content }) => {
  return (
    <div className="parallax">
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="info">
      <h2>Our Services</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt</li>
        <li>Ut labore et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam</li>
      </ul>
    </div>
  );
};

const About = ({ title, content }) => {
  return (
    <div className="parallax">
      <div className="content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default App;
