const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  assignTo: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = AssignForm = mongoose.model('assignForm', formSchema);