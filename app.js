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
const deleteRoute = require('./routes/deletes');
const updateRoute = require('./routes/updates');

//My Request
app.use('/game-add', postRoute);
app.use('/game-get', getRoute);
app.use('/game-del', deleteRoute);
app.use('/game-upd', updateRoute);

//Connect To My DB
mongoose.connect(process.env.PBconstring, (err) => 
    console.log(!err ? "connected" : err)
);

//listener
app.listen(process.env.PORT || 3000);