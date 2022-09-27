import "reflect-metadata"
require('dotenv').config()

import express from 'express';
import { userRouter } from "./src/routes/UserRouter";
import { postRouter } from "./src/routes/PostRouter";

const app = express();

app.use(express.json());

app.use(userRouter)
app.use(postRouter)

app.get('/', (req, res) => {
    res.send('This is a test web page');
})

app.listen(process.env.PORT || 3003, () => {
    console.log(`The application is listening on port ${process.env.PORT || 3003}!`)
})