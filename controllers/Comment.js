import { createComment, getAllCommentsService, getCommentByIdService, getCommentByVideoIdService } from "../services/Comment";

export const createComment = async (req, res) => {
    try {
        const { video_id } = req.params;
        const { username, comment_text } = req.body;

        const newComment = await createComment(username, comment_text, video_id);

        res.status(201).json({
            data: newComment,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllComments = async (req, res) => {
    try {
        const allComments = await getAllCommentsService();

        res.json({
            data: allComments,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await getCommentByIdService(id);

        res.json({
            data: comment,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getCommentByVideoId = async (req, res) => {
    try {
        const { video_id } = req.body;

        const comments = await getCommentByVideoIdService(video_id);

        res.json({
            data: comments,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};