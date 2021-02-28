const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({}, { strict: false });

// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Movie', movieSchema);
