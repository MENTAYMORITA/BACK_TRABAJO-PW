import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findOne); // Cambiado de PUT a GET
router.post('/', ProductController.create);
<<<<<<< HEAD
router.put('/:id', ProductController.update); // Deja solo un PUT
router.delete('/:id', ProductController.remove);
router.get('/category/:category', ProductController.findByCategory);
=======
router.put('/', ProductController.update);
router.delete('/', ProductController.remove);
router.get('/category/:category', ProductController.findByCategory);

>>>>>>> 5cfcf1867ff4048498f64e1f885f32b276bcea9d


export default router;
