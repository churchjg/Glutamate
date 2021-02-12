import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'


const app = express(); //runs as a function and can now run all differnet methods on this app instance
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true})); //limits sizes of images
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); //properly send requests
app.use(cors()); //can now call cors with a function

app.use('/posts', postRoutes); //every route inside of the postRoutes will start with posts (localhost:5000/posts)


app.get('/', (req, res) => {
    res.send('Hello to Memories')
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
    console.log(`Check Port: ${app.get('port')}`)
})

let mongoURI = "";
if(process.env.NODE_ENV === "production"){
    mongoURI = process.env.DB_URL;
}else{
    mongoURI = "mongodb://localhost/5000"
}

// const PORT = process.env.PORT || 5000;
// const CONNECTION_URL = 'mongodb+srv://churchjg:Rosslyn503$@cluster0.djqnm.mongodb.net/Glutamate?retryWrites=true&w=majority'

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) //function to accept connection and object parameters
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))) //find our port
    .catch((error) => console.log(`${error} did not connect`));  //catch errors

    mongoose.set('useFindAndModify', false); //makes sure we get no warnings in console
