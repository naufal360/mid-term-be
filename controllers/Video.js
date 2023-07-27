import { createVideo, getAllVideosService, getVideoByIdService } from "../services/Video.js";

export const createVideo = async (req, res) => {
    try {
        const { thumbnail } = req.body;

        const newVideo = await createVideo(thumbnail);

        res.status(201).json({
            data: newVideo,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllVideos = async (req, res) => {
    try {
        const allVideos = await getAllVideosService();

        res.json({
            data: allVideos,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getVideoById = async (req, res) => {
    try {
        const { id } = req.params;

        const video = await getVideoByIdService(id);

        res.json({
            data: video,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};