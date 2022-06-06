const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes)

app.listen(PORT);


