const express = require("express");
const bobyParser = require('body-parser');
const app = express();
require("dotenv").config();
const db = require('./db');
app.use(bobyParser.json());

const PORT = process.env.PORT || 3000;
const DB_Url = process.env.DB_URL;
const personRoute = require('./routes/personRoute');
const menuRoute = require('./routes/menuRoute');
app.use('/person', personRoute);
app.use('/menu', menuRoute);

app.listen(PORT);