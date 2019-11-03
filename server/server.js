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
// mongorestore --host Cluster0-shard-0/cluster0-shard-00-00-agjbp.mongodb.net:27017,cluster0-shard-00-01-agjbp.mongodb.net:27017,cluster0-shard-00-02-agjbp.mongodb.net:27017 --ssl --username tacotest --password <PASSWORD> --authenticationDatabase admin