// src/App.js

import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SneakerTable from './components/SneakerTable';

function App() {
  return (
    <div className="App">
      <Header />
      <SneakerTable />
      <Footer />
    </div>
  );
}

export default App;
