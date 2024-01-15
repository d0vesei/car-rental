import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservationsPage = () => {
    const [cars, setCars] = useState([]);
    const [reservation, setReservation] = useState({
        carMake: '',
        carModel: '',
        pickupDate: '',
        returnDate: '',
        customer: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    });

    useEffect(() => {
        axios.get('/api/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setReservation({ ...reservation, [name]: value });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const reservationData = {
            carMake: reservation.carMake,
            carModel: reservation.carModel,
            pickupDate: reservation.pickupDate,
			returnDate: reservation.returnDate,
			customer: reservation.customer
        };

        const response = await axios.post('http://localhost:3000/api/reservations', reservationData);
        if(response.status === 201) {
            alert('Rezerwacja została pomyślnie dodana.');
        }
    } catch (error) {
        console.error('Wystąpił błąd podczas tworzenia rezerwacji:', error);
        alert('Nie udało się dodać rezerwacji.');
    }
};

    return (
        <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
        <p className="text-gray-600 text-sm text-justify mb-8">
         Witamy w naszym serwisie rezerwacji samochodów online! <br />
         Tutaj możesz łatwo i szybko zarezerwować samochód na potrzebne Ci terminy.
         Wybierz markę, model oraz daty odbioru i zwrotu pojazdu, a my zadbamy o resztę.
         Zapewniamy szeroki wybór pojazdów oraz atrakcyjne ceny. 
        </p>
    <h2 className="text-2xl font-semibold text-center mb-6">Złóż Rezerwację</h2>

    
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Marka Samochodu:</label>
            <select name="carMake" onChange={handleInputChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                {cars.map(car => (
                    <option key={car._id} value={car.make}>{car.make}</option>
                ))}
            </select>
            <label className="block text-sm font-medium text-gray-700">Model Samochodu:</label>
            <select name="carModel" onChange={handleInputChange} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                {cars.map(car => (
                    <option key={car._id} value={car.model}>{car.model}</option>
                ))}
            </select>
        </div>

		<label className="block">Data odbioru:</label>
		<input type="date" name="pickupDate" onChange={handleInputChange} placeholder="Data odbioru " />

		<label className="block">Data zwrotu:</label>
		<input type="date" name="returnDate" onChange={handleInputChange} placeholder="Data zwrotu " />

		<label className="block">Imię:</label>
		<input type="text" name="customer.firstName" onChange={handleInputChange} placeholder="Imię " />

		<label className="block">Nazwisko:</label>
		<input type="text" name="customer.lastName" onChange={handleInputChange} placeholder="Nazwisko " />

		<label className="block">Email:</label>
		<input type="email" name="customer.email" onChange={handleInputChange} placeholder="Email " />

		<label className="block">Telefon:</label>
		<input type="text" name="customer.phone" onChange={handleInputChange} placeholder="Telefon " />
		
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Zarezerwuj
        </button>
    </form>
</div>

    );
};

export default ReservationsPage;
