import express from 'express';
import dotenv from 'dotenv';
import videoRouter from './routes/Video.js';
import commentRouter from './routes/Comment.js';
import productRouter from './routes/Product.js';
import { mongodbConn } from './config/Mongodb.js';

// config dotenv
dotenv.config();

const start = () => {
    const app = express();
    const mongoHost = process.env.MONGODB_HOST;

    // config mongodb
    mongodbConn(mongoHost);

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