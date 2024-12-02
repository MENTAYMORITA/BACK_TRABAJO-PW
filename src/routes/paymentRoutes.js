// paymentRoutes.js
const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

// Ruta para crear un pago
router.post('/payments', paymentController.createPayment);

// Ruta para obtener detalles del pago
router.get('/payments/:id', paymentController.getPaymentDetails);

module.exports = router;
