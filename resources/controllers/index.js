import BaseController              from './base';
import { Country, City, Language, Profile } from '../../models';

export class CountriesController extends BaseController{
  constructor(){
    super(Country, 'isocode');
  }
}


export class CitiesController extends BaseController{
  constructor(){
    super(City, '_id');
  }
}


export class LanguagesController extends BaseController{
  constructor(){
    super(Language, 'isocode');
  }
}


export class ProfilesController extends BaseController{
  constructor(){
    super(Profile, 'userName');
  }
}
