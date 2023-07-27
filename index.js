import express from 'express';
import dotenv from 'dotenv';
import videoRouter from './routes/Video.js';
import commentRouter from './routes/Comment.js';
import productRouter from './routes/Product.js';
import { mongodbConn } from './config/Mongodb.js';

// config dotenv
dotenv.config();

const start = async () => {
    const app = express();

    // env var
    const mongoHost = process.env.MONGODB_HOST;
    const db_name = process.env.DB_NAME;

    // config mongodb
    await mongodbConn(mongoHost, db_name);

    // config express json
    app.use(express.json());

    // config route
    app.use(videoRouter);
    app.use(commentRouter);
    app.use(productRouter);

    // run server
    app.listen(3000, () => {
        console.log(`Server running on port 3000`);
    })
};

start();