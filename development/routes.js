import express from 'express';
import blogController from './controllers/BlogController';


const routes = express();


routes.get('/addblog', blogController.getAll);
routes.post('/', blogController.post);

export default routes;

console.log("server updated")
console.log("server updated")
console.log("server updated")