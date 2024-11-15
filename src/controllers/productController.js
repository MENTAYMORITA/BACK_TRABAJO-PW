import Product from '../models/product.js';
import ProductCategory from '../models/productCategory.js';
import ProductService from '../services/productService.js';


const findByCategory = async (req, res) => {
    try {
<<<<<<< HEAD
      const { category } = req.params; // Obtener la categoría desde los parámetros de la URL
      const products = await Product.findAll({
        include: [
          {
            model: ProductCategory,
            where: { name: category }, // Filtrar por nombre de la categoría
            attributes: ['name'],
          },
        ],
        attributes: ['name', 'imageUrl', 'code', 'stock', 'priceUSD', 'pricePEN'],
      });
  
      const result = products.map(product => ({
        categoria: product.ProductCategory.name,
        producto: product.name,
        imageUrl: product.imageUrl,
        code: product.code,
        stock: product.stock,
        priceUSD: product.priceUSD,
        pricePEN: product.pricePEN,
      }));
  
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
=======
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
>>>>>>> 5cfcf1867ff4048498f64e1f885f32b276bcea9d



const findAll = async (req, res) => {
    try {
        const results = await Product.findAll({
            include: [
                {
                    model: ProductCategory,
                    attributes: ['name'], // Solo queremos el nombre de la categoría
                },
            ],
        });

        // Estructurar los resultados
        const products = results.map((product) => ({
            id: product.id,
            name: product.name,
            code: product.code,
            stock: product.stock,
            priceUSD: product.priceUSD,
            pricePEN: product.pricePEN,
            description: product.description,
            imageUrl: product.imageUrl,
            category: product.ProductCategory ? product.ProductCategory.name : null,
        }));

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByPk(id, {
            include: [
                {
                    model: ProductCategory,
                    attributes: ['name'], // Solo queremos el nombre de la categoría
                },
            ],
        });

        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Estructurar el resultado
        const product = {
            id: result.id,
            name: result.name,
            code: result.code,
            stock: result.stock,
            priceUSD: result.priceUSD,
            pricePEN: result.pricePEN,
            description: result.description,
            imageUrl: result.imageUrl,
            category: result.ProductCategory ? result.ProductCategory.name : null, // Incluye la categoría
        };

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const create = async (req, res) => {
    try {
      const { code, name, description, category_id, priceUSD, pricePEN, stock, imageUrl } = req.body;
  
      if (!code || !name || !category_id || !priceUSD || !pricePEN || stock === undefined) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
      }
  
      const categoryExists = await ProductCategory.findByPk(category_id);
      if (!categoryExists) {
        return res.status(400).json({ message: 'La categoría seleccionada no existe' });
      }
  
      const newProduct = await Product.create({
        code,
        name,
        description,
        category_id,
        priceUSD,
        pricePEN,
        stock,
        imageUrl,
      });
  
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  



const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const product = await ProductService.update(id, data);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
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