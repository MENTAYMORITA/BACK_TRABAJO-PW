const productSaleService = require('../services/productSaleService');

// Registrar una venta de un producto
exports.createProductSale = async (req, res) => {
    const { product_id, quantity } = req.body;
    try {
        // Llamada al servicio para registrar la venta
        const newProductSale = await productSaleService.createProductSale(product_id, quantity);
        res.status(201).json(newProductSale); // Retornar la venta registrada
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar la venta del producto' });
    }
};

// Obtener el historial de ventas
exports.getProductSales = async (req, res) => {
    try {
        // Llamada al servicio para obtener el historial de ventas
        const productSales = await productSaleService.getProductSales();
        res.status(200).json(productSales); // Retornar el historial de ventas
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el historial de ventas' });
    }
};
