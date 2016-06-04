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

app.get('/products', (req, res, next) => {
    const mockedData = [
        {
            id: 1,
            img: 'http://placeimg.com/100/100/animal',
            title: 'Winter Veil Charm',
            description: 'Lorem ipsum dolor sit amet la la la la.',
        },
        {
            id: 2,
            img: 'http://placeimg.com/100/100/animal',
            title: 'Winter Veil Charm',
            description: 'Lorem ipsum dolor sit amet la la la la.',
        },
    ];

    return res.status(200).send(JSON.stringify({ data: mockedData }));
});

app.listen(config.port, () => {
    console.log('React Express App is listening on port ' + config.port);
});

process.on('uncaughtException', exception => {
    console.error('uncaughtException', exception.stack);
});
