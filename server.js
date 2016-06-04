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

app.get('/products', (req, res, next) => {
    const products = mockedData;

    if (req.query.search) {
        const found = [];

        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            if (product.title.indexOf(req.query.search) >= 0) {
                found.push(product);
            }
        }

        return res.json({ data: found });
    }

    return res.json({ data: mockedData });
});

app.listen(config.port, () => {
    console.log('React Express App is listening on port ' + config.port);
});

process.on('uncaughtException', exception => {
    console.error('uncaughtException', exception.stack);
});
