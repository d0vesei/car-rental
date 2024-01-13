import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CarsImage from './main-carrental.png';

function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen text-gray-800">
        <header className="w-full h-screen bg-no-repeat bg-cover bg-center" 
                style={{ backgroundImage: `url(${CarsImage})`, aspectRatio: '16/9' }}>
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
