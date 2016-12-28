'use strict';

const config = require('../config');

const Record = require('./models').Record;


function createRecord({temperature, humidity, time})
{
  let tsp = Date.parse(time);

  Record.create({temperature, humidity, tsp});
}
module.exports.createRecord = createRecord;