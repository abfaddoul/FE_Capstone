import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = ({ cats }) => {
  const { id } = useParams();
  const cat = cats.find(c => c.id === id);

  if (!cat) {
    return (
      <div className="container">
        <div className="error-page">
          <h2>Cat not found</h2>
          <p>The cat you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getImageUrl = () => {
    if (cat.image?.url) {
      return cat.image.url;
    }
    return 'https://via.placeholder.com/400x300/cccccc/666666?text=No+Image';
  };

  const formatTemperament = (temperament) => {
    if (!temperament) return 'Not specified';
    return temperament.split(',').map(t => t.trim()).join(', ');
  };

  return (
    <div className="details-page">
      <div className="container">
        <div className="back-button">
          <Link to="/" className="btn btn-secondary">
            ← Back to Cats
          </Link>
        </div>
        
        <div className="cat-details">
          <div className="cat-image-section">
            <img 
              src={getImageUrl()} 
              alt={cat.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/cccccc/666666?text=No+Image';
              }}
            />
          </div>
          
          <div className="cat-info-section">
            <h1 className="cat-title">{cat.name}</h1>
            
            <div className="info-grid">
              <div className="info-item">
                <h3>Origin</h3>
                <p>{cat.origin || 'Unknown'}</p>
              </div>
              
              <div className="info-item">
                <h3>Temperament</h3>
                <p>{formatTemperament(cat.temperament)}</p>
              </div>
              
              <div className="info-item">
                <h3>Life Span</h3>
                <p>{cat.life_span ? `${cat.life_span} years` : 'Not specified'}</p>
              </div>
              
              <div className="info-item">
                <h3>Weight</h3>
                <p>{cat.weight?.metric ? `${cat.weight.metric} kg` : 'Not specified'}</p>
              </div>
              
              <div className="info-item">
                <h3>Adaptability</h3>
                <p>{cat.adaptability ? `${cat.adaptability}/5` : 'Not specified'}</p>
              </div>
              
              <div className="info-item">
                <h3>Intelligence</h3>
                <p>{cat.intelligence ? `${cat.intelligence}/5` : 'Not specified'}</p>
              </div>
            </div>
            
            <div className="description-section">
              <h3>Description</h3>
              <p>{cat.description || 'No description available for this cat breed.'}</p>
            </div>
            
            {cat.wikipedia_url && (
              <div className="external-links">
                <a 
                  href={cat.wikipedia_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Learn More on Wikipedia
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
