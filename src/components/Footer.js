import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🐱 CatQuest</h3>
            <p>Discover and explore amazing cat breeds from around the world.</p>
          </div>
          
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Browse Cat Breeds</li>
              <li>Search & Filter</li>
              <li>Detailed Information</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>API</h4>
            <p>Powered by <a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer">The Cat API</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 CatQuest. Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
