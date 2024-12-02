const db = require('../db'); // Usar tu conexión de base de datos (con Knex, Sequelize, etc.)

// Registrar una venta de un producto
exports.createProductSale = async (product_id, quantity) => {
    try {
        const saleDate = new Date();
        const [newProductSale] = await db('product_sales').insert({
            product_id,
            sale_date: saleDate,
            quantity
        }).returning('*'); // Retorna la venta registrada
        return newProductSale;
    } catch (error) {
        throw new Error('Error al registrar la venta del producto');
    }
};

// Obtener el historial de ventas de productos
exports.getProductSales = async () => {
    try {
        const productSales = await db('product_sales')
            .join('products', 'product_sales.product_id', 'products.id') // Unimos con la tabla productos
            .select('product_sales.*', 'products.name as product_name');
        return productSales;
    } catch (error) {
        throw new Error('Error al obtener el historial de ventas');
    }
};
