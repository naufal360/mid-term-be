import express from 'express';
import { createProduct, getProductByIdService } from '../services/Product.js';

const router = express.Router();

router.post('/products', createProduct);
router.get('/videos/:video_id/products', getProductByIdService);

export default router;