import cors from 'cors';
import express from 'express';
import moongose, { Mongoose } from 'mongoose';
import filmModel from './filmModel';
import filmRoutes from './filmRoutes';
import bodyParser from 'body-parser';


const app =  express();
const port =  9000;

moongose.connect('mongodb://localhost/FilmsDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());
filmRoutes(app);
app.listen(port);

console.log(`Film RESTful API server started on: ${port}`);