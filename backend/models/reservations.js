const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  pickupDate: Date,
  returnDate: Date
});

module.exports = mongoose.model('Reservation', reservationSchema);