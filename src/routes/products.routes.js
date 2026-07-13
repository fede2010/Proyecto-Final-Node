import { Router } from 'express';
import ProductController from '../controllers/products.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const productsRouter = Router();

productsRouter.use(authMiddleware);

productsRouter.get('/', ProductController.getAll);
productsRouter.get('/:id', ProductController.getById);
productsRouter.post('/create', ProductController.create);
productsRouter.delete('/:id', ProductController.delete);

export default productsRouter;
