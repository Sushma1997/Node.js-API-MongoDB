const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to MongoDB:'));
db.once('open', () => {
  console.log('successfully connected to MongoDB');
});

module.exports = mongoose;
