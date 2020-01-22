const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');


//load  env variables 
dotenv.config({path: './config/config.env'});


//connect to database
connectDB();


const app = express();
 
//Body parser
app.use(express.json());

//Enable cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes 
app.use('/api/v1/atm', require('./routes/atm'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));