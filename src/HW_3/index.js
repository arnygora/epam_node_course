const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const sequelize = require('./config/database');
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(userRoutes)

sequelize.sync()
    .then(() => app.listen(PORT))
    .catch(error => console.error('ERROR', error));



