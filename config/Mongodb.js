import mongoose from "mongoose";

export const mongodbConn = (mongo_url, db_name) => {
    mongoose.connect(mongo_url, {
        dbName: db_name,
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error);
    });

    database.once('connected', () => {
        console.log('MongoDB Connected Successfully');
    });
};