const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String
});

// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Movie', movieSchema);
