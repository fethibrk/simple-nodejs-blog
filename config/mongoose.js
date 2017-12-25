const mongoose = require('mongoose');

const config = require('.');

mongoose.Promise = global.Promise;

mongoose.connect(config.db, { useMongoClient: true })
  .then(() => console.log(`Connected to database ${config.db}`))
  .catch(err => console.log(err));

module.exports = mongoose;
