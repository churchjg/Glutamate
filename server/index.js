import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';


const app = express(); //runs as a function and can now run all differnet methods on this app instance
// dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true})); //limits sizes of images
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); //properly send requests
app.use(cors({origin:"https://churchjg-sentiments.zeet.app"}))//can now call cors with a function

app.use('/posts', postRoutes); //every route inside of the postRoutes will start with posts (localhost:5000/posts)
app.use("/user", userRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello to Memories')
// });

// app.set("port", process.env.PORT || 5000);

// app.listen(app.get("port"), () => {
//     console.log(`Check Port: ${app.get('port')}`)
// })

// let mongoURI = "";
// if(process.env.NODE_ENV === "production"){
//     mongoURI = process.env.DB_URL;
// }else{
//     mongoURI = "mongodb://localhost/5000"
// }

// cors example: 

// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
 
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })


const CONNECTION_URL = "mongodb+srv://churchjg:Rosslyn503$@cluster0.djqnm.mongodb.net/Glutamate?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) //function to accept connection and object parameters
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))) //find our port
    .catch((error) => console.log(`${error} did not connect`));  //catch errors

    mongoose.set('useFindAndModify', false); //makes sure we get no warnings in console
