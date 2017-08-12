var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
	console.log('Body: ', req.body, 'Query: ', req.query, 'Time: ', Date.now());
	next();
});
// define the home page route
router.get('/', function (req, res) {
	res.send('login')
});
// define the about route
router.get('/auth', function (req, res) {
	res.send('auth')
});

module.exports = router;