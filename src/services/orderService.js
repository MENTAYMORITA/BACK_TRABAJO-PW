import Order from '../models/order.js';  // Asegúrate de que tu modelo de Order esté correctamente importado

// Obtener todas las órdenes
const findAll = async () => {
    return await Order.findAll();
};

// Obtener una orden por su ID
const findOne = async (id) => {
    return await Order.findByPk(id);
};

// Crear una nueva orden
const create = async (orderData) => {
    return await Order.create(orderData);
};

// Actualizar una orden
const update = async (id, data) => {
    const order = await Order.findByPk(id);
    if (!order) return null; // Si no se encuentra la orden, devolver null
    await order.update(data); // Actualizar la orden con los nuevos datos
    return order; // Retornar la orden actualizada
};

// Eliminar una orden
const remove = async (id) => {
    return await Order.destroy({ where: { id } });
};

// Función para obtener todas las órdenes de un usuario
const findByUserId = async (user_id) => {
    return await Order.findAll({ where: { user_id } });
};

export default { findAll, findOne, create, update, remove, findByUserId };
