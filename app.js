const express = require('express');
const app = express();

const domainRoutes = require('./api/routes/domains')

app.use(function(req, res, next) {
      if ((req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect('https://' + req.get('Host') + req.url);
     } else
        next();
    });

app.use('/domains', domainRoutes);



module.exports = app;