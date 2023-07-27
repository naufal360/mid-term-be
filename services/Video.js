import { addVideo, getAllVideos, getVideoById } from "../repositories/Video";

export const createVideo = (thumbnail) => {
    const newVideo = addVideo(thumbnail);

    return newVideo;
};

export const getAllVideosService = () => {
    const allVideos = getAllVideos();

    return allVideos;
};

export const getVideoByIdService = (id) => {
    const video = getVideoById(id);

    return video;
};
