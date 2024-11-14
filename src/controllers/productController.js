import Product from '../models/product.js';
import ProductCategory from '../models/productCategory.js';
import ProductService from '../services/productService.js';


const findByCategory = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: ProductCategory,
                    attributes: ['name']
                }
            ],
            attributes: ['name', 'imageUrl', 'code', 'stock', 'priceUSD', 'pricePEN'],
            order: [[ProductCategory, 'name', 'ASC']]
        });

        const result = products.map(product => ({
            categoria: product.ProductCategory.name, 
            producto: product.name,                  
            imageUrl: product.imageUrl,             
            code: product.code,                      
            stock: product.stock,                    
            priceUSD: product.priceUSD,         
            pricePEN: product.pricePEN               
        }));

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



const findAll = async (req, res) => {
    try {
        const result = await ProductService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductService.findOne(id);
        return result ? res.status(200).json(result) : res.status(404).json({ message: 'Product not found' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const result = await ProductService.create(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductService.update(id, req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.remove(id);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default { findAll, findOne, create, update, remove, findByCategory };