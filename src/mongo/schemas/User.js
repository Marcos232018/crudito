const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  surname: String,
  nickname: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', schema);

module.exports = User;