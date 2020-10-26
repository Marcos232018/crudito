const mongoose = require('mongoose');

//CONNECTED TO THE DATABASE

mongoose.connect('mongodb://localhost/test-apirest', {
  useNewUrlParser: true
});