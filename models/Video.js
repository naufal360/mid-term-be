import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    url_thumbnail: {
        type: String,
        required: true,
    },
});

const Video = new mongoose.Model('Video', videoSchema);

export default Video;