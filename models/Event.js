const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: String,
  time: String,
  name: String,
  createdAt: String
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
