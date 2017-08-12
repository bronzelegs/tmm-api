'use strict';

var _utils = require('./utils');

var _controllers = require('../controllers');

var express = require('express');
var router = express.Router();


var profilesController = new _controllers.ProfilesController();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Body: ', req.body, 'Query: ', req.query, 'Time: ', Date.now());
	next();
});

router.get('/', function (req, res) {
	profilesController.list().then((0, _utils.ok)(res)).then(null, (0, _utils.fail)(res));
});

router.post('/', function (req, res) {
	profilesController.read(req.body.user).then(function (data) {
		console.log(data, req.body.password, data.profile.password);
		if (data.profile.password == req.body.password) {
			res.send(JSON.stringify({ 'response': 'ok' }));
		} else {
			res.send(JSON.stringify({ 'response': 'no match' }));
		}
	}).then(null, (0, _utils.fail)(res));
});

router.get('/auth', function (req, res) {
	res.send('auth');
});

module.exports = router;

//# sourceMappingURL=login-compiled.js.map