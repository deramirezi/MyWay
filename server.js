const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; 

const routes = require('./models/apis')


mongoose.connect('mongodb://localhost/mi_ruta',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));
app.use('/api', routes)
app.listen(PORT, console.log(`server is starting at ${PORT}`))