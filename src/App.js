import React from 'react';
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CarsImage from './main-carrental.png';
import ReservationsPage from './components/ReservationsPage';

function App() {
  useEffect(() => {
    document.body.classList.add('min-h-screen', 'bg-gradient-to-tr', 'from-rose-100', 'to-teal-100');
    
    return () => {
      document.body.classList.remove('min-h-screen', 'bg-gradient-to-tr', 'from-rose-100', 'to-teal-100');
    };
  }, []);

  return (
    <Router>
       <div className="flex flex-col min-h-screen text-gray-800">
        <header className="relative w-full h-1/4 bg-no-repeat bg-cover bg-center">
          <img src={CarsImage} alt="Luxury Cars" className="object-cover w-full h-full" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-transparent to-rose-100" />
        </header>

        {/* Routing dla różnych stron */}
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/reservations" element={<ReservationsPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
