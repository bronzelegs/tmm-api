import { Router } 						from 'express';
import {HistoriesController, ProfilesController, LoginsController}	from './controllers';


export default function() {
	var api = Router();
	api.use('/histories', new HistoriesController().route());
	api.use('/profiles', new ProfilesController().route());
	api.use('/logins', new LoginsController().route());

	return api;
}
