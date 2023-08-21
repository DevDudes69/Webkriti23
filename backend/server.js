const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})