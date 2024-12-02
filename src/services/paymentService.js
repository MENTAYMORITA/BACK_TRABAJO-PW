// paymentService.js
const db = require('../db');

// Crear un nuevo pago
exports.createPayment = async (order_id, address, cardholder_name, cardholder_surname, card_number, card_cvv, expiration_date, card_type_id, total, status_id) => {
    try {
        const [newPayment] = await db('payment_details').insert({
            order_id,
            address,
            cardholder_name,
            cardholder_surname,
            card_number,
            card_cvv,
            expiration_date,
            card_type_id,
            total,
            status_id
        }).returning('*');
        return newPayment;
    } catch (error) {
        throw new Error('Error al crear el pago');
    }
};

// Obtener detalles del pago
exports.getPaymentDetails = async (id) => {
    try {
        const paymentDetails = await db('payment_details')
            .where({ id })
            .join('order_status', 'payment_details.status_id', 'order_status.id')
            .join('card_types', 'payment_details.card_type_id', 'card_types.id')
            .select('payment_details.*', 'order_status.status as order_status', 'card_types.name as card_type_name');
        return paymentDetails;
    } catch (error) {
        throw new Error('Error al obtener detalles del pago');
    }
};
