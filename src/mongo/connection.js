const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test-apirest', {
  useNewUrlParser: true
});