const express = require('express');
const app = express();

const domainRoutes = require('./api/routes/domains')

app.use('/domains', domainRoutes);

module.exports = app;