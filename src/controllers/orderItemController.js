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

/////////////////////////////////////////////////////////////////////////////////////////////////
// Eliminar un producto del carrito
exports.removeProductFromCart = async (req, res) => {
    const { order_id, product_id } = req.params;
    try {
        const result = await orderItemService.removeProductFromCart(order_id, product_id);
        if (result) {
            res.status(200).json({ message: 'Producto eliminado del carrito' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado en el carrito' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto del carrito' });
    }
};
///////////////////////////////////////////////////////////////////////////////////*//////////////
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
