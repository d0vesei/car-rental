const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  licenseNumber: String,
  address: {
    street: String,
    city: String,
    postalCode: String
  }
});

module.exports = mongoose.model('Customer', customerSchema);