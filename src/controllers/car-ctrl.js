const Car = require('../models/car'); 

const getCarsList = async (req, res) => {
    try {
      const cars = await Car.find({}, 'make model'); // Pobiera tylko 'make' i 'model' dla /reservations
      res.status(200).json(cars);
    } catch (error) {
      res.status(400).send({message: "Błąd przy pobieraniu samochodów", error});
    }
  };

// Pobieranie wszystkich samochodów
exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: "Błąd przy pobieraniu samochodów", error });
    }
};

// Dodawanie nowego samochodu
exports.createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(500).json({ message: "Błąd przy dodawaniu samochodu", error });
    }
};

// Aktualizacja samochodu
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: "Błąd przy aktualizacji samochodu", error });
    }
};

// Usuwanie samochodu
exports.deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Samochód usunięty pomyślnie" });
    } catch (error) {
        res.status(500).json({ message: "Błąd przy usuwaniu samochodu", error });
    }
};
