'use strict';

const express = require('express');

const host = '0.0.0.0';
const port = 8080;

const app = express();

app.use('/', express.static('static'));

app.use('/dist', express.static('dist'));

app.listen(port, host);
console.log(`server listening on ${host}:${port}`);