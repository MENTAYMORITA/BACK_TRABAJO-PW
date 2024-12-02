// orderItemController.js
const orderItemService = require('../services/orderItemService');

// Agregar un producto al carrito
exports.addProductToCart = async (req, res) => {
    const { order_id, product_id, quantity, price_usd, price_pen } = req.body;
    try {
        const newOrderItem = await orderItemService.addProductToCart(order_id, product_id, quantity, price_usd, price_pen);
        res.status(201).json(newOrderItem);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto al carrito' });
    }
};

// Obtener productos del carrito
exports.getOrderItems = async (req, res) => {
    const { order_id } = req.params;
    try {
        const orderItems = await orderItemService.getOrderItems(order_id);
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos del carrito' });
    }
};
