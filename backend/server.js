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

// Uruchomienie serwera
const port = 5771;
app.listen(port, () => console.log(`Serwer działa na porcie ${port}`));
