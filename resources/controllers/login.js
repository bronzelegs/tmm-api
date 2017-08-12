var express = require('express');
var router = express.Router();
import {ok, fail} from "./utils";
import {HistoriesController, ProfilesController, LoginsController}    from '../controllers';

var profilesController = new ProfilesController();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Body: ', req.body, 'Query: ', req.query, 'Time: ', Date.now());
	next();
});

router.get('/', function (req, res) {
	profilesController.list()
		.then(ok(res))
		.then(null, fail(res));
});

router.post('/', function (req, res) {
	profilesController.read(req.body.user)
		.then((data) => {
			console.log(data, req.body.password, data.profile.password);
			if (data.profile.password == req.body.password) {
				 res.send(JSON.stringify({'response' : 'ok'}))
			} else {
				res.send(JSON.stringify({'response' : 'no match'}));
			}
		})
		.then( null, fail(res))
});

router.get('/auth', function (req, res) {
	res.send('auth')
});

module.exports = router;

