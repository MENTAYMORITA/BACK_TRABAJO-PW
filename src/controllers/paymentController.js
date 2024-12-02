// paymentController.js
const paymentService = require('../services/paymentService');

// Crear un nuevo pago
exports.createPayment = async (req, res) => {
    const { order_id, address, cardholder_name, cardholder_surname, card_number, card_cvv, expiration_date, card_type_id, total, status_id } = req.body;
    try {
        const newPayment = await paymentService.createPayment(order_id, address, cardholder_name, cardholder_surname, card_number, card_cvv, expiration_date, card_type_id, total, status_id);
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pago' });
    }
};

// Obtener detalles del pago
exports.getPaymentDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const paymentDetails = await paymentService.getPaymentDetails(id);
        res.status(200).json(paymentDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener detalles del pago' });
    }
};
