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
        <div>
            <h2>Złóż Rezerwację</h2>
            <form onSubmit={handleSubmit}>
			<label>Marka Samochodu:</label>
			<select name="carMake" onChange={handleInputChange}>
				{cars.map(car => (
					<option key={car._id} value={car.make}>{car.make}</option>
				))}
			</select>

			<label>Model Samochodu:</label>
			<select name="carModel" onChange={handleInputChange}>
				{cars.map(car => (
					<option key={car._id} value={car.model}>{car.model}</option>
				))}
			</select>

			<label>Data odbioru:</label>
			<input type="date" name="pickupDate" onChange={handleInputChange} placeholder="Data odbioru" />

			<label>Data zwrotu:</label>
			<input type="date" name="returnDate" onChange={handleInputChange} placeholder="Data zwrotu" />

			<label>Imię:</label>
			<input type="text" name="customer.firstName" onChange={handleInputChange} placeholder="Imię" />

			<label>Nazwisko:</label>
			<input type="text" name="customer.lastName" onChange={handleInputChange} placeholder="Nazwisko" />

			<label>Email:</label>
			<input type="email" name="customer.email" onChange={handleInputChange} placeholder="Email" />

			<label>Telefon:</label>
			<input type="text" name="customer.phone" onChange={handleInputChange} placeholder="Telefon" />

		<button type="submit">Zarezerwuj</button>

		</form>
        </div>
    );
};

export default ReservationsPage;
