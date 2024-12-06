// orderItemService.js
const db = require('../db');

// Agregar un producto al carrito
exports.addProductToCart = async (order_id, product_id, quantity, price_usd, price_pen) => {
    try {
        const [newOrderItem] = await db('order_items').insert({
            order_id,
            product_id,
            quantity,
            price_usd,
            price_pen
        }).returning('*');
        return newOrderItem;
    } catch (error) {
        throw new Error('Error al agregar producto al carrito');
    }
};

// Obtener productos en el carrito
exports.getOrderItems = async (order_id) => {
    try {
        const orderItems = await db('order_items')
            .where({ order_id })
            .join('products', 'order_items.product_id', 'products.id')
            .select('order_items.*', 'products.name as product_name');
        return orderItems;
    } catch (error) {
        throw new Error('Error al obtener productos del carrito');
    }
};