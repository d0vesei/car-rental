import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CarsImage  from './main-carrental.png';
import './components/HomePage.css'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <img src={CarsImage} className="App-cars-image" alt="CarsImage" />
        </header>

        {/* Routing dla różnych stron */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
