import React, { useState, useEffect } from 'react';

export default function Customers() {
  // lista klientów
  const [customers, setCustomers] = useState([]);

  // dane nowego lub edytowanego klienta
  const [newCustomer, setNewCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    address: {
      street: '',
      city: '',
      postalCode: ''
    }
  });

  // Stany do obsługi edycji klienta
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Pobieranie listy klientów z serwera
  useEffect(() => {
    fetch('/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Obsługa dodawania lub aktualizacji klienta
  const handleSubmit = () => {
    const method = editing ? 'PUT' : 'POST';
    const endpoint = editing ? `/customers/${editingId}` : '/customers';

    fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
    .then(response => response.json())
    .then(data => {
      if (editing) {
        setCustomers(customers.map(customer => customer._id === editingId ? data : customer));
      } else {
        setCustomers([...customers, data]);
      }
      resetForm();
    })
    .catch(error => console.error('Error:', error));
  };

  // Obsługa kliknięcia przycisku edytuj
  const handleEdit = (customer) => {
    setEditing(true);
    setEditingId(customer._id);
    setNewCustomer({ ...customer });
  };

  // Obsługa kliknięcia przycisku usuń
  const handleDelete = (id) => {
    fetch(`/customers/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setCustomers(customers.filter(customer => customer._id !== id));
    })
    .catch(error => console.error('Error:', error));
  };

  // Resetowanie formularza
  const resetForm = () => {
    setEditing(false);
    setEditingId(null);
    setNewCustomer({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      licenseNumber: '',
      address: {
        street: '',
        city: '',
        postalCode: ''
      }
    });
  };

  // Obsługa zmiany wartości w polach formularza
  const handleChange = (e, field, nestedField = null) => {
    if (nestedField) {
      setNewCustomer({
        ...newCustomer,
        [field]: {
          ...newCustomer[field],
          [nestedField]: e.target.value
        }
      });
    } else {
      setNewCustomer({
        ...newCustomer,
        [field]: e.target.value
      });
    }
  };

  return (
    <div>
      <h2>Klienci</h2>
      <div>
        {/* Pola formularza do dodawania/edytowania klienta */}
        {/* ... (tutaj umieść pola formularza) */}
        <button onClick={handleSubmit}>{editing ? 'Aktualizuj Klienta' : 'Dodaj Klienta'}</button>
        {editing && <button onClick={resetForm}>Anuluj Edycję</button>}
      </div>
      <ul>
        {/* Wyświetlanie listy klientów z przyciskami do edycji i usuwania */}
        {customers.map(customer => (
          <li key={customer._id}>
            {customer.firstName} {customer.lastName} - {customer.email}
            <button onClick={() => handleEdit(customer)}>Edytuj</button>
            <button onClick={() => handleDelete(customer._id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
