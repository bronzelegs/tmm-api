import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';
import api from './resources';

var login = require('./resources/controllers/login')

var app = express();
app.server = http.createServer(app);

app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit : '100kb'
}));

db( _ => {
	app.use('/', api());
	app.use('/login', login);
	app.server.listen(3100);
});

export default app;
