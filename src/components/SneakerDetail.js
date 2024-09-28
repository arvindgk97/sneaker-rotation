// src/components/SneakerDetail.js

import React from 'react';
import './SneakerDetail.css';

const SneakerDetail = ({ sneaker, onClose }) => {
  if (!sneaker) return null;

  return (
    <div className="sneaker-detail-overlay" onClick={onClose}>
      <div className="sneaker-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={sneaker.image} alt={sneaker.name} className="detail-image" />
        <h2>{sneaker.name}</h2>
        <p><strong>Price:</strong> {sneaker.price}</p>
        <p>{sneaker.description}</p>
        <p><strong>Day:</strong> {sneaker.day}</p>
      </div>
    </div>
  );
};

export default SneakerDetail;
