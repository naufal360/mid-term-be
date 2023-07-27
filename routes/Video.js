import express from 'express';
import { createVideo, getVideoById } from '../services/Video.js';

const router = express.Router();

router.post('/videos', createVideo);
router.get('/videos/:id', getVideoById);

export default router;