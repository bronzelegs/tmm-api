import BaseController              from './base';
import { History, Profile } from '../../models';


export class HistoriesController extends BaseController{
  constructor(){
    super(History, '_id');
  }
}


export class ProfilesController extends BaseController{
  constructor(){
    super(Profile, 'userName');
  }
}
