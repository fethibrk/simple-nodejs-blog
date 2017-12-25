const mongoose = require('../config/mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String
  },
  imageUrl: {
    type: String
  },
  content: {
    type: String
  }
});

module.exports = mongoose.model('Post', PostSchema);
