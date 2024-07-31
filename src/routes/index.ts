import express from 'express';
import userrouter from './curd.route';
 
import languageRoute from './language.route';
import anushaRoute from './anusha.route';
 // Adjust the import path as needed


const routes = express.Router(); // Instance of a new express Router

routes.use('/',userrouter)  // Register the user route at the root path '/'  // Adjust the route path as needed
 
routes.use('/', languageRoute)

routes.use('/', anushaRoute)
 


export default routes; // Export the routes for use in the server.ts file.
