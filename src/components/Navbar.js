import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1>🐱 CatQuest</h1>
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Breeds</Link>
          <Link to="/" className="nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
