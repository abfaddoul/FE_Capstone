import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  const categories = [
    'all',
    'friendly',
    'playful',
    'calm',
    'intelligent',
    'independent',
    'affectionate',
    'active',
    'quiet',
    'usa',
    'uk',
    'egypt',
    'thailand',
    'japan'
  ];

  return (
    <div className="search-section">
      <div className="container">
        <div className="search-container">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search cats by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">
              🔍
            </button>
          </div>
          
          <div className="filter-group">
            <label htmlFor="category-filter">Filter by:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
