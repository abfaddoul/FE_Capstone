import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ cat }) => {
  const getImageUrl = () => {
    if (cat.image?.url) {
      return cat.image.url;
    }
    // Fallback to a placeholder image if no image is available
    return 'https://via.placeholder.com/300x200/cccccc/666666?text=No+Image';
  };

  const truncateDescription = (text, maxLength = 100) => {
    if (!text) return 'No description available';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="cat-card">
      <div className="card-image">
        <img 
          src={getImageUrl()} 
          alt={cat.name}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200/cccccc/666666?text=No+Image';
          }}
        />
      </div>
      <div className="card-content">
        <h3 className="cat-name">{cat.name}</h3>
        <p className="cat-origin">Origin: {cat.origin || 'Unknown'}</p>
        <p className="cat-temperament">
          {cat.temperament ? 
            cat.temperament.split(',').slice(0, 3).join(', ') + 
            (cat.temperament.split(',').length > 3 ? '...' : '') 
            : 'Temperament not specified'
          }
        </p>
        <p className="cat-description">
          {truncateDescription(cat.description)}
        </p>
        <div className="card-actions">
          <Link to={`/cat/${cat.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
