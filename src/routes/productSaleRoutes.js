const express = require('express');
const productSaleController = require('../controllers/productSaleController');
const router = express.Router();

// Ruta para registrar una venta de un producto
router.post('/product-sales', productSaleController.createProductSale);

// Ruta para obtener el historial de ventas
router.get('/product-sales', productSaleController.getProductSales);

module.exports = router;
