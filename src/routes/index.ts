import express from 'express';
import userrouter from './curd.route';
 
import languageRoute from './language.route';
import anushaRoute from './anusha.route';
 // Adjust the import path as needed


const routes = express.Router();

routes.use('/hii',userrouter)
 
routes.use('/ok', languageRoute)

routes.use('/', anushaRoute)
 


export default routes;
