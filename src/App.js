import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import DetailsPage from './components/DetailsPage';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [catsPerPage] = useState(12);

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.thecatapi.com/v1/breeds');
      if (!response.ok) {
        throw new Error('Failed to fetch cats');
      }
      const data = await response.json();
      setCats(data);
      setFilteredCats(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = cats;
    
    if (searchTerm) {
      filtered = filtered.filter(cat => 
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cat => 
        cat.temperament?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        cat.origin?.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    setFilteredCats(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, cats]);

  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = filteredCats.slice(indexOfFirstCat, indexOfLastCat);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading cats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error: {error}</h2>
        <button onClick={fetchCats} className="btn btn-primary">Try Again</button>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar 
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
                <div className="cats-grid">
                  {currentCats.map(cat => (
                    <Card key={cat.id} cat={cat} />
                  ))}
                </div>
                {filteredCats.length > catsPerPage && (
                  <Pagination 
                    catsPerPage={catsPerPage}
                    totalCats={filteredCats.length}
                    currentPage={currentPage}
                    paginate={paginate}
                  />
                )}
              </>
            } />
            <Route path="/cat/:id" element={<DetailsPage cats={cats} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
