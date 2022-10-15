import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../services/user/AuthUserController';
import { DetailUserController } from '../controllers/user/DetailUserController';

import { CreateCategoryController } from '../controllers/category/CreateCategoryController';
import { ListCategoryController } from '../controllers/category/ListCategoryController';

import { CreateProductController } from '../controllers/product/CreateProductController';
import { ListByCategoryController } from '../controllers/product/ListByCategoryController';

import { ListOrderController } from '../controllers/order/ListOrderController';
import { CreateOrderController } from '../controllers/order/CreateOrderController';
import { SendOrderController } from '../controllers/order/SendOrderController';
import { RemoveOrderController } from '../controllers/order/RemoveOrderController';
import { DetailOrderController } from '../controllers/order/DetailOrderController';

import { AddItemController } from '../controllers/order/AddItemController';
import { RemoveItemController } from '../controllers/order/RemoveItemController';

import { isAuthenticated } from '../middlewares/isAuthenticated';

import uploadConfig from '../config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// User
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoryController().handle);

// Product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/product', isAuthenticated, new ListByCategoryController().handle);

// Order
router.get('/orders', isAuthenticated, new ListOrderController().handle);
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle);
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle);

export { router };