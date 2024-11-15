import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.remove);
router.post('/login', UserController.login);
router.post('/register', UserController.register);

export default router;
