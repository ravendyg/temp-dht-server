'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Record =
	mongoose.model(
		'Record',
		new Schema({
      tsp: { type: Number, index: { unique: true } },
      temperature: Number,
      humidity: Number
    })
	);
module.exports.Record = Record;