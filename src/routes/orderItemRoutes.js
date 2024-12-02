import express from 'express';
import * as orderItemController from '../controllers/orderItemController.js';  // Ajuste a la importación ES6
const router = express.Router();

// Ruta para agregar un producto al carrito
router.post('/order-items', orderItemController.addProductToCart);

// Ruta para obtener productos en el carrito
router.get('/order-items/:order_id', orderItemController.getOrderItems);

export default router;  // Usar export default en lugar de module.exports
