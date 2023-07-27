import express from 'express';
import { createComment, getCommentByVideoIdService } from '../services/Comment.js';

const router = express.Router();

router.post('/comments', createComment);
router.get('/videos/:video_id/comments', getCommentByVideoIdService);

export default router;