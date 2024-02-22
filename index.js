import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import debug from 'debug';
const debugServer = debug('app:Server');
import { userRouter } from './routes/api/user.js';
import {ping} from './database.js';

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static('frontend/dist')); //Serve the static files from the React app

const port = process.env.PORT || 5000;

app.listen(port, () => debugServer(`Server started on port http://localhost:${port}`));

app.use('/api/user', userRouter); //Use the userRouter for all routes starting with /api/user

