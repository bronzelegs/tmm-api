'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = require('./resources/controllers/login');

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _cors2.default)({
	exposedHeaders: ['Link']
}));

app.use(_bodyParser2.default.json({
	limit: '100kb'
}));

(0, _db2.default)(function (_) {
	app.use('/', (0, _resources2.default)());
	app.use('/login', login);
	app.server.listen(3100);
});

exports.default = app;

//# sourceMappingURL=server-compiled.js.map