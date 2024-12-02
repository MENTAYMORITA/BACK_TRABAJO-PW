import Product from "../models/product.js";
import ProductCategory from "../models/productCategory.js"; // Asegúrate de importar ProductCategory

// Obtener todos los productos
const findAll = async () => {
    return await Product.findAll();
};

// Obtener un producto por ID
const findOne = async (id) => {
    return await Product.findByPk(id);
};

// Crear un nuevo producto
const create = async (data) => {
    const { category_id } = data;

    // Verificar si la categoría existe
    const categoryExists = await ProductCategory.findByPk(category_id);
    if (!categoryExists) {
        throw new Error('La categoría proporcionada no existe');
    }

    // Crear y devolver el producto
    return await Product.create(data);
};

// Actualizar un producto existente
const update = async (id, data) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Producto no encontrado');

    // Actualizar el producto con los nuevos datos
    await product.update(data);
    return product;
};

// Eliminar un producto
const remove = async (id) => {
    // Eliminar el producto de la base de datos
    return await Product.destroy({ where: { id } });
};

export default { findAll, findOne, create, update, remove };
