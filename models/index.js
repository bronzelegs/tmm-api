import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
  isocode: String,
  name: String,
  description: String
});

const CitySchema = new mongoose.Schema({
  name: String,
  description: String,
  country: {type: mongoose.Schema.Types.ObjectId, ref: 'Country'},
});


const LanguageSchema = new mongoose.Schema({
  isocode: String,
  name: String
});

const ProfileSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  middleName: String,
  email1: String,
  email2: String,
  image: String,
  url: String,
  about: String,
  createDate: {type: Date, default: Date.now},
  lastAccess: {type: Date, default: Date.now}
});

const Country  = mongoose.model('Country', CountrySchema);
const City     = mongoose.model('City', CitySchema);
const Language = mongoose.model('Language', LanguageSchema);
const Profile = mongoose.model('Profile', ProfileSchema);

export {Country, City, Language, Profile}
