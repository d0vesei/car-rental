const express = require('express');
const carController = require('../controllers/car-ctrl.js');
const router = express.Router();

router.get('/', carController.getCars);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);
router.get('/reservations', carController.getCarsList);

module.exports = router;