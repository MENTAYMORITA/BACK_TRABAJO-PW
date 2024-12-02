import express from 'express';
import orderController from '../controllers/orderController.js';

const router = express.Router();

// Ruta para crear una orden
router.post('/orders', orderController.createOrder);

// Ruta para obtener detalles de una orden
router.get('/orders/:id', orderController.getOrderDetails);

export default router;  // Exportación por defecto
