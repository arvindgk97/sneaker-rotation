import React from 'react';
import weeklySneakerRotation from './sneakers';

function SneakerList() {
  return (
    <div>
      {weeklySneakerRotation.map(sneaker => (
        <div key={sneaker.id}>
          <h3>{sneaker.name}</h3>
          <img src={sneaker.image} alt={sneaker.name} />
          <p>{sneaker.description}</p>
          <p>{sneaker.price}</p>
        </div>
      ))}
    </div>
  );
}

export default SneakerList;
