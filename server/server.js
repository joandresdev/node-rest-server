require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));




mongoose.connect(process.env.URLDB,

    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log(`Base de datos online`);
    });



app.listen(process.env.PORT, () => {
    console.log(`Escuchando prueto ${process.env.PORT}`);
});

// Q62IppAhrjDhYODq
// tacotest
// mongodb+srv://tacotest:Q62IppAhrjDhYODq@cluster0-agjbp.mongodb.net/cafe