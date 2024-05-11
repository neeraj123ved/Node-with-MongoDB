const express = require("express");
const bobyParser = require('body-parser');
const app = express();
const db = require('./db');
app.use(bobyParser.json());


const personRoute = require('./routes/personRoute');
const menuRoute = require('./routes/menuRoute');
app.use('/person', personRoute);
app.use('/menu', menuRoute);

app.listen(3000);