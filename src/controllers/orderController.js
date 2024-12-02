import OrderService from '../services/orderService.js';

// Crear una nueva orden
const createOrder = async (req, res) => {
    try {
        const { user_id, total_price_usd, total_price_pen } = req.body;

        if (!user_id || !total_price_usd || !total_price_pen) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const newOrder = await OrderService.createOrder(user_id, total_price_usd, total_price_pen);
        
        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Obtener detalles de una orden
const getOrderDetails = async (req, res) => {
    try {
        const { id } = req.params;
        
        const orderDetails = await OrderService.getOrderDetails(id);

        if (!orderDetails || orderDetails.length === 0) {
            return res.status(404).json({ message: 'Detalles de la orden no encontrados' });
        }

        return res.status(200).json(orderDetails);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Obtener todas las órdenes
const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Actualizar una orden (si es necesario)
const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { total_price_usd, total_price_pen, status_id } = req.body;

        const updatedOrder = await OrderService.updateOrder(id, { total_price_usd, total_price_pen, status_id });

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }

        return res.status(200).json(updatedOrder);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar una orden
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedOrder = await OrderService.deleteOrder(id);

        if (!deletedOrder) {
            return res.status(404).json({ message: 'Orden no encontrada' });
        }

        return res.status(200).json({ message: 'Orden eliminada correctamente' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default { createOrder, getOrderDetails, getAllOrders, updateOrder, deleteOrder };
