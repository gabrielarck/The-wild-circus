require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/api/v1/coucou', require( './routes./spectacles'));

app.listen( 5000,() => {
  console.log('Listening on port '+ ( 5000 ));
})