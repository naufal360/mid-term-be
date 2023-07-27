import Video from "../models/Video.js";

export const addVideo = (thumbnail) => {
    const newVideo = Video.create({ url_thumbnail: thumbnail });

    return newVideo;
};

export const getAllVideos = () => {
    const allVideos = Video.find();

    return allVideos;
};

export const getVideoById = (id) => {
    const video = Video.findById({_id: id});

    return video;
};