const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://johns:password12345@cluster0.cr9e0xj.mongodb.net/finalProject';

mongoose.connect(uri, { useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const attractionRouter = require('./ruts/spots');
const contactRouter = require('./ruts/contct')
app.use('/attractions', attractionRouter);
app.use('/contact', contactRouter);
app.use(express.static(path.join(__dirname, "../build")))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});