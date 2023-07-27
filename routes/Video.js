import express from 'express';
import { createVideo, getVideoByIdService } from '../services/Video.js';

const router = express.Router();

router.post('/videos', createVideo);
router.get('/videos/:id', getVideoByIdService);

export default router;