import express from 'express';
import { createProduct, getProductById } from '../services/Product.js';

const router = express.Router();

router.post('/products', createProduct);
router.get('/videos/:video_id/products', getProductById);

export default router;