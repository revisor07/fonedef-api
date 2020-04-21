const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'You have received latest package of malicious domains'
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Domain entry was added'
  })
});

router.get('/:domain', (req, res, next) => {
  const name = req.params.domain;
  res.status(200).json({
    message: 'info about the following domain:',
    domain: name
  });
});

router.patch('/:domain', (req, res, next) => { 
  res.status(200).json({
    message: 'updated domain'
  })
});

router.delete('/:domain', (req, res, next) => { 
  res.status(200).json({
    message: 'domain deleted'
  })
});

module.exports = router; 