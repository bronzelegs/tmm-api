import mongoose from 'mongoose';
Promise = require('q').Promise;

export default function(callback) {
	mongoose.connect('mongodb://localhost/testing');
	callback();
}
