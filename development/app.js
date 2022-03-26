import express from 'express'; // ES6 notation
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes.js';
import blogController from './controllers/BlogController.js';


let uri = "";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }, () =>{
    console.log("Connected to mongodb");
});

const app = express();
app.use(bodyParser.json());
app.use.apply('/api', routes);


export default app;


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")

console.log("server updated")
console.log("server updated")
console.log("server updated")


console.log("server updated")
console.log("server updated")
console.log("server updated")

