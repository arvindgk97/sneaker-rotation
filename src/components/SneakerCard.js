// src/components/SneakerCard.js

import React from 'react';
import './SneakerCard.css';

const SneakerCard = ({ sneaker, onClick }) => {
  return (
    <div className="sneaker-card" onClick={() => onClick(sneaker)}>
      <img src={sneaker.image} alt={sneaker.name} className="sneaker-image" />
      <h3>{sneaker.name}</h3>
      <p>{sneaker.price}</p>
    </div>
  );
};

export default SneakerCard;
