'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Profile = exports.History = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HistorySchema = new _mongoose2.default.Schema({
	userId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: '_id' },
	action: String,
	timeStamp: { type: Date, default: Date.now }
});

var ProfileSchema = new _mongoose2.default.Schema({
	userName: String,
	firstName: String,
	lastName: String,
	middleName: String,
	email1: String,
	email2: String,
	image: String,
	url: String,
	about: String,
	password: String,
	createDate: { type: Date, default: Date.now },
	lastAccess: { type: Date, default: Date.now }
});

var History = _mongoose2.default.model('History', HistorySchema);
var Profile = _mongoose2.default.model('Profile', ProfileSchema);

exports.History = History;
exports.Profile = Profile;

//# sourceMappingURL=index-compiled.js.map