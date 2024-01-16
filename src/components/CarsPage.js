import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom'; 

const CarsPage = () => {
    const [cars, setCars] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate ();

    useEffect(() => {
        axios.get('http://localhost:5771/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleReserve = () => {
        navigate ('/reservations'); 
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Dostępne Samochody</h2>
            <p className="text-center text-gray-600 mb-6">
                Zapoznaj się z naszą starannie wyselekcjonowaną kolekcją samochodów. 
                Tutaj znajdziesz szeroki wybór marek i modeli, każdy z nich dostępny 
                do oglądania i zakupu. Przeglądaj, porównuj i znajdź swój idealny samochód!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cars.map(car => (
                    <div key={car._id} className="relative border rounded overflow-hidden shadow-lg group">
                        <img 
                          src={car.image} 
                          alt={`${car.make} ${car.model}`}
                          className="w-full h-auto"
                        />
                        <button 
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={handleReserve}>
                          Zarezerwuj
                        </button>
                        <div className="p-4">
                            <h3 className="font-bold">{car.make} {car.model}</h3>
                            <p>Rok: {car.year}</p>
                            <p>Cena: {car.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarsPage;