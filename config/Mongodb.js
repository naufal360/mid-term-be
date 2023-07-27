import mongoose from "mongoose";

export const mongodbConn = (mongo_url) => {
    mongoose.connect(mongo_url);
    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('MongoDB Connected Successfully');
    });
};