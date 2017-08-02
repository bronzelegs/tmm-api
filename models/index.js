import mongoose from 'mongoose';



const HistorySchema = new mongoose.Schema({
      userId: {type: mongoose.Schema.Types.ObjectId, ref: '_id'},
      action: String,
      timeStamp: {type: Date, default: Date.now}
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

const History = mongoose.model('History', HistorySchema);
const Profile = mongoose.model('Profile', ProfileSchema);

export { History, Profile}
