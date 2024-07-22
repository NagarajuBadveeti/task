import express from 'express';
import userrouter from './curd.route';
 
import languageRoute from './language.route';
 // Adjust the import path as needed


const routes = express.Router();

routes.use('/',userrouter)
 
routes.use('/', languageRoute)
 


export default routes;
