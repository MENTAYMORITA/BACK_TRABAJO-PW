import express from 'express';
import ProductController from '../controllers/productController.js'

const router = express.Router();

router.get('/', ProductController.findAll);
router.put('/:id', ProductController.findOne);
router.post('/', ProductController.create);
router.put('/', ProductController.update);
router.delete('/', ProductController.remove);
router.get('/category/:category', ProductController.findByCategory);


export default router;