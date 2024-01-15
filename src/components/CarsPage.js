import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarsPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('/api/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <div>
            <h2>Dostępne Samochody</h2>
            <ul>
                {cars.map(car => (
                    <li key={car._id}>
                        {car.make} {car.model} - {car.year}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarsPage;
