'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var api = (0, _express.Router)();
	api.use('/histories', new _controllers.HistoriesController().route());
	api.use('/profiles', new _controllers.ProfilesController().route());
	api.use('/logins', new _controllers.LoginsController().route());

	return api;
};

var _express = require('express');

var _controllers = require('./controllers');

//# sourceMappingURL=index-compiled.js.map