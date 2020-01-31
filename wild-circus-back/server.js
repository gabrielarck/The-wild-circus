require('dotenv').config();
const { UsShows }  = require('./models');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// app.use('/api/v1/spectacles', require( './routes/spectacles'));
app.use('/api/v1/usShows', require( './routes/usShows'));



app.listen( 5000,() => {
  console.log('Listening on port '+ ( 5000 ));
})