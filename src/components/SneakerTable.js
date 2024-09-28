// src/components/SneakerTable.js

import React, { useState } from 'react';
import SneakerCard from './SneakerCard';
import SneakerDetail from './SneakerDetail';
import useSneakers from '../data/sneakers';
import './SneakerTable.css';

const SneakerTable = () => {
  const [selectedSneaker, setSelectedSneaker] = useState(null);
  const sneakers = useSneakers();

  const handleCardClick = (sneaker) => {
    setSelectedSneaker(sneaker);
  };

  const closeDetail = () => {
    setSelectedSneaker(null);
  };

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <div className="sneaker-table-container">
      <table className="sneaker-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Sneaker</th>
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day) => {
            const sneaker = sneakers.find((s) => s.day === day);
            return (
              <tr key={day}>
                <td>{day}</td>
                <td>
                  {sneaker ? (
                    <SneakerCard sneaker={sneaker} onClick={handleCardClick} />
                  ) : (
                    'No Selection'
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedSneaker && (
        <SneakerDetail sneaker={selectedSneaker} onClose={closeDetail} />
      )}
    </div>
  );
};

export default SneakerTable;