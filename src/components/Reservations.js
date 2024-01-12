import React, { useState, useEffect } from 'react';

export default function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [newReservation, setNewReservation] = useState({
    carId: '',
    customerId: '',
    pickupDate: '',
    returnDate: '',
    status: 'confirmed'
  });
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Pobieranie listy rezerwacji z serwera
  useEffect(() => {
    fetch('/reservations')
      .then(response => response.json())
      .then(data => setReservations(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Obsługa dodawania/aktualizacji rezerwacji
  const handleSubmit = () => {
    const method = editing ? 'PUT' : 'POST';
    const endpoint = editing ? `/reservations/${editingId}` : '/reservations';

    fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReservation),
    })
    .then(response => response.json())
    .then(data => {
      if (editing) {
        setReservations(reservations.map(reservation => reservation._id === editingId ? data : reservation));
      } else {
        setReservations([...reservations, data]);
      }
      resetForm();
    })
    .catch(error => console.error('Error:', error));
  };

  // Obsługa kliknięcia przycisku edytuj
  const handleEdit = (reservation) => {
    setEditing(true);
    setEditingId(reservation._id);
    setNewReservation({ ...reservation });
  };

  // Obsługa kliknięcia przycisku usuń
  const handleDelete = (id) => {
    fetch(`/reservations/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setReservations(reservations.filter(reservation => reservation._id !== id));
    })
    .catch(error => console.error('Error:', error));
  };

  // Resetowanie formularza
  const resetForm = () => {
    setEditing(false);
    setEditingId(null);
    setNewReservation({
      carId: '',
      customerId: '',
      pickupDate: '',
      returnDate: '',
      status: 'confirmed'
    });
  };

  // Obsługa zmiany wartości w polach formularza
  const handleChange = (e, field) => {
    setNewReservation({
      ...newReservation,
      [field]: e.target.value
    });
  };

  return (
    <div>
      <h2>Rezerwacje</h2>
      <div>
        {/* Formularz do dodawania/edytowania rezerwacji */}
        <input
          type="text"
          placeholder="ID samochodu"
          value={newReservation.carId}
          onChange={(e) => handleChange(e, 'carId')}
        />
        <input
          type="text"
          placeholder="ID klienta"
          value={newReservation.customerId}
          onChange={(e) => handleChange(e, 'customerId')}
        />
        <input
          type="date"
          placeholder="Data odbioru"
          value={newReservation.pickupDate}
          onChange={(e) => handleChange(e, 'pickupDate')}
        />
        <input
          type="date"
          placeholder="Data zwrotu"
          value={newReservation.returnDate}
          onChange={(e) => handleChange(e, 'returnDate')}
        />
        <select
          value={newReservation.status}
          onChange={(e) => handleChange(e, 'status')}
        >
          <option value="confirmed">Potwierdzona</option>
          <option value="completed">Zakończona</option>
          <option value="cancelled">Anulowana</option>
        </select>
        <button onClick={handleSubmit}>{editing ? 'Aktualizuj Rezerwację' : 'Dodaj Rezerwację'}</button>
        {editing && <button onClick={resetForm}>Anuluj Edycję</button>}
      </div>
      <ul>
        {/* Wyświetlanie listy rezerwacji z przyciskami do edycji i usuwania */}
        {reservations.map(reservation => (
          <li key={reservation._id}>
            Samochód: {reservation.carId}, Klient: {reservation.customerId}
            <br />
            Odbiór: {reservation.pickupDate}, Zwrot: {reservation.returnDate}, Status: {reservation.status}
            <br />
            <button onClick={() => handleEdit(reservation)}>Edytuj</button>
            <button onClick={() => handleDelete(reservation._id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}