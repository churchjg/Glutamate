import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
import userRouter from "./routes/user.js";

const app = express(); //runs as a function and can now run all differnet methods on this app instance
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true})); //limits sizes of images
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); //properly send requests
app.use(cors()); //can now call cors with a function

app.use('/posts', postRoutes); //every route inside of the postRoutes will start with posts (localhost:5000/posts)
app.use("/user", userRouter);


app.get('/', (req, res) => {
    res.send('Hello to Memories')
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) //function to accept connection and object parameters
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))) //find our port
    .catch((error) => console.log(`${error} did not connect`));  //catch errors

    mongoose.set('useFindAndModify', false); //makes sure we get no warnings in console
