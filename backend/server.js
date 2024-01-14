const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Car = require('./models/cars'); // Import modelu Car 
const Customer = require('./models/customers'); // Import modelu Customer 
const Reservation = require('./models/reservations'); // Import modelu Reservation 

const app = express();
app.use(cors());
app.use(express.json()); 

// Połączenie z MongoDB
mongoose.connect('mongodb://localhost:27017/carrental', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Połączono z MongoDB');
}).catch(err => {
  console.error('Błąd połączenia z MongoDB:', err);
});

// Endpointy dla modelu Car

    // Pobranie samochodu
app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).send(error);
  }
});

    // Dodanie samochodu
app.post('/cars', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    res.status(500).send(error);
  }
});

    // Aktualizacja samochodu
app.put('/cars/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
  } catch (error) {
    res.status(500).send(error);
  }
});

    // Usuwanie samochodu
app.delete('/cars/:id', async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    res.json(deletedCar);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpointy dla modelu Customer

    // Pobranie danych o kliencie
 app.get('/customers', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (error) {
      res.status(500).send(error);
    }
  });

    //  Dodanie klienta
app.post('/customers', async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
    // Aktualizacja klienta
  app.put('/customers/:id', async (req, res) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }  // opcja "new" zwraca dokument po aktualizacji
      );
      if (!updatedCustomer) {
        return res.status(404).send('Klient nie został znaleziony.');
      }
      res.json(updatedCustomer);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Usuwanie klienta
  app.delete('/customers/:id', async (req, res) => {
    try {
      const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
      if (!deletedCustomer) {
        return res.status(404).send('Klient nie został znaleziony.');
      }
      res.json(deletedCustomer);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  
// Endpointy dla modelu Reservation

   // Dodanie danych o rezerwacji
    app.post('/reservations', async (req, res) => {
    try {
      const reservation = new Reservation(req.body);
      await reservation.save();
      res.status(201).json(reservation);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
     // Pobranie danych o rezerwacji
  app.get('/reservations', async (req, res) => {
    try {
      const reservations = await Reservation.find().populate('carId customerId');
      res.json(reservations);
    } catch (error) {
      res.status(500).send(error);
    }
  });

    // Aktualizacja rezerwacji
    app.put('/reservations/:id', async (req, res) => {
    try {
      const updatedReservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedReservation) {
        return res.status(404).send('Rezerwacja nie została znaleziona.');
      }
      res.json(updatedReservation);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // Usuwanie rezerwacji
  app.delete('/reservations/:id', async (req, res) => {
    try {
      const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
      if (!deletedReservation) {
        return res.status(404).send('Rezerwacja nie została znaleziona.');
      }
      res.json(deletedReservation);
    } catch (error) {
      res.status(500).send(error);
    }
  });

// Uruchomienie serwera
const port = 3001;
app.listen(port, () => console.log(`Serwer działa na porcie ${port}`));
