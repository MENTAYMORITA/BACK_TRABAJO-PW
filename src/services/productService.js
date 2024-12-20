import Product from "../models/product.js";

const findAll = async () => {
    return await Product.findAll();
};

const findOne = async (id) => {
    return await Product.findByPk(id);
};

const create = async (data) => {
    const { category_id } = data;

    const categoryExists = await ProductCategory.findByPk(category_id);
    if (!categoryExists) {
        throw new Error('La categoría proporcionada no existe');
    }

    return await Product.create(data);
};



const update = async (id, data) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('product no encontrado');
    await product.update(data);
    return product;
};

const remove = async (id) => {
    return await Product.destroy({where: {id}});
};

export default { findAll, findOne, create, update, remove}