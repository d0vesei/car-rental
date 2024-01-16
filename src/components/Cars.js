import React, { useState, useEffect } from 'react';

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    year: '',
    image: '', 
    price: ''
  });
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Pobieranie samochodów z serwera
  useEffect(() => {
    fetch('/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Obsługa dodawania/aktualizacji samochodu
  const handleSubmit = () => {
    const method = editing ? 'PUT' : 'POST';
    const endpoint = editing ? `/cars/${editingId}` : '/cars';

    fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    })
    .then(response => response.json())
    .then(data => {
      if (editing) {
        setCars(cars.map(car => car._id === editingId ? data : car));
      } else {
        setCars([...cars, data]);
      }
      resetForm();
    })
    .catch(error => console.error('Error:', error));
  };

  // Obsługa kliknięcia przycisku edytuj
  const handleEdit = (car) => {
    setEditing(true);
    setEditingId(car._id);
    setNewCar({ ...car });
  };

  // Obsługa kliknięcia przycisku usuń
  const handleDelete = (id) => {
    fetch(`/cars/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setCars(cars.filter(car => car._id !== id));
    })
    .catch(error => console.error('Error:', error));
  };

  // Resetowanie formularza
  const resetForm = () => {
    setEditing(false);
    setEditingId(null);
    setNewCar({
      make: '',
      model: '',
      year: ''
    });
  };

  // Obsługa zmiany wartości w polach formularza
  const handleChange = (e, field) => {
    setNewCar({
      ...newCar,
      [field]: e.target.value
    });
  };

  return (
    <div>
      <h2>Samochody</h2>
      <div>
        {/* Formularz do dodawania/edytowania samochodu */}
        <input
          type="text"
          placeholder="Marka"
          value={newCar.make}
          onChange={(e) => handleChange(e, 'make')}
        />
        <input
          type="text"
          placeholder="Model"
          value={newCar.model}
          onChange={(e) => handleChange(e, 'model')}
        />
        <input
          type="number"
          placeholder="Rok produkcji"
          value={newCar.year}
          onChange={(e) => handleChange(e, 'year')}
        />
        <button onClick={handleSubmit}>{editing ? 'Aktualizuj Samochód' : 'Dodaj Samochód'}</button>
        {editing && <button onClick={resetForm}>Anuluj Edycję</button>}
      </div>
      <ul>
        {/* Wyświetlanie listy samochodów z przyciskami do edycji i usuwania */}
        {cars.map(car => (
          <li key={car._id}>
            {car.make} {car.model} - {car.year}
            <button onClick={() => handleEdit(car)}>Edytuj</button>
            <button onClick={() => handleDelete(car._id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
