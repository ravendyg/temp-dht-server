'use strict';

var express = require('express');
var router = express.Router();

const db = require('../lib/db/record.js');

router.post(
  '/',
  (req, res) =>
  {
    if (typeof req.body.temperature !== 'undefined' &&
        typeof req.body.humidity    !== 'undefined' &&
        typeof req.body.time        !== 'undefined'
    )
    {
      db.createRecord(req.body);
      res.send('');
    }
    else{
      res.status(400).send('');
    }
  }
);

module.exports = router;
