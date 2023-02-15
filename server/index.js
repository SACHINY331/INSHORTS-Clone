

import Connection from './database/db.js';
import express from 'express'
import DefaultData from './default.js';
import route from './routes/route.js';
import cors from 'cors';bodyParser
import bodyParser from 'body-parser';


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


app.use('/',route)

const PORT =8000;

Connection();


app.listen(PORT,() =>console.log(`server is running sucessfully on port ${PORT}`));
DefaultData();