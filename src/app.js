const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const index = require('./routes/index')
// const agenda = require('./routes/agenda-routes');

app.use('/', index);
// app.use('/agenda', agenda);

module.exports = app;