import BaseController              from './base';
import {History, Profile, Login} from '../../models';


export class HistoriesController extends BaseController {
	constructor() {
		super(History, '_id');
	}
}


export class ProfilesController extends BaseController {
	constructor() {
		super(Profile, 'userName');
	}
}

export class LoginsController extends BaseController {
	constructor() {
		super(Login, 'userName');
	
	}

}

