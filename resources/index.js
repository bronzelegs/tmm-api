import { Router } 						from 'express';
import {
			 	 HistoriesController,
				 ProfilesController
			 }											from './controllers';

export default function() {
	var api = Router();
	api.use('/histories', new HistoriesController().route());
	api.use('/profiles', new ProfilesController().route());
	return api;
}
