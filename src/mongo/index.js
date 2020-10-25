const mongoose = require('mongoose');
require('./connection');
const User = require('./schemas/User');

module.exports = {
  User,
}