import express from "express";
import router from './src/Controllers/UserController.js';
const app = express();
const port = 8080; // default port to listen



app.use('/users', router);


// start the express server
app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
} );