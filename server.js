'use strict';

const express = require('express');
const config = require('./config/' + (process.env.NODE_ENV || 'development'));

const app = express();

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', (req, res, next) => {
    return res.sendFile(__dirname + '/server/views/index.html');
});

app.listen(config.port, () => {
    console.log('React Express App is listening on port ' + config.port);
});

process.on('uncaughtException', exception => {
    console.error('uncaughtException', exception.stack);
});
