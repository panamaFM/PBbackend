const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import My Routes
const getRoute = require('./routes/gets');
const postRoute = require('./routes/posts');

//My Request
app.use('/post', postRoute)
app.use('/get', getRoute)

//Connect To My DB
mongoose.connect(process.env.PBconstring, (err) => 
    console.log(!err ? "connected" : err)
);

//listener
app.listen(3000);