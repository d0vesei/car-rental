const Reservation = require('car-rental\backend\models\reservation');

createReservation = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Musisz podać dane rezerwacji',
        });
    }

    const reservation = new Reservation(body);

    if (!reservation) {
        return res.status(400).json({ success: false, error: 'Błąd przy tworzeniu rezerwacji' });
    }

    reservation.save().then(() => {
        return res.status(201).json({
            success: true,
            id: reservation._id,
            message: 'Rezerwacja została utworzona!',
        });
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Rezerwacja nie została utworzona!',
        });
    });
};

updateReservation = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Musisz podać dane do aktualizacji',
        });
    }

    Reservation.findOne({ _id: req.params.id }, (err, reservation) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Rezerwacja nie znaleziona!',
            });
        }

        reservation.carId = body.carId;
        reservation.pickupDate = body.pickupDate;
        reservation.returnDate = body.returnDate;
        reservation.customerId = body.customerId;

        reservation.save().then(() => {
            return res.status(200).json({
                success: true,
                id: reservation._id,
                message: 'Rezerwacja zaktualizowana!',
            });
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'Rezerwacja nie zaktualizowana!',
            });
        });
    });
};

// Usuwanie rezerwacji
deleteReservation = async (req, res) => {
    await Reservation.findOneAndDelete({ _id: req.params.id }, (err, reservation) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!reservation) {
            return res
                .status(404)
                .json({ success: false, error: `Rezerwacja nie znaleziona` });
        }

        return res.status(200).json({ success: true, data: reservation });
    }).catch(err => console.log(err));
};

getReservationById = async (req, res) => {
    await Reservation.findOne({ _id: req.params.id }, (err, reservation) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!reservation) {
            return res
                .status(404)
                .json({ success: false, error: `Rezerwacja nie znaleziona` });
        }
        return res.status(200).json({ success: true, data: reservation });
    }).catch(err => console.log(err));
};

getReservations = async (req, res) => {
    await Reservation.find({}, (err, reservations) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        if (!reservations.length) {
            return res
                .status(404)
                .json({ success: false, error: `Rezerwacje nie znalezione` });
        }
        return res.status(200).json({ success: true, data: reservations });
    }).catch(err => console.log(err));
};



module.exports = {
    createReservation,
    updateReservation,
    deleteReservation,
    getReservations,
    getReservationById,
};