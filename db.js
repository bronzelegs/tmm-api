import mongoose from 'mongoose';

export default function(callback) {
	mongoose.connect('mongodb://localhost/testing');
	callback();
}