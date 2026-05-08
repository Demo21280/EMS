const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: false
  },
  newTask: {
    type: Boolean,
    default: false
  },
  completed: {
    type: Boolean,
    default: false
  },
  failed: {
    type: Boolean,
    default: false
  },
  taskTitle: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  taskDate: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  theam: {
    type: String
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  taskCounts: {
    active: { type: Number, default: 0 },
    newTask: { type: Number, default: 0 },
    completed: { type: Number, default: 0 },
    failed: { type: Number, default: 0 }
  },
  tasks: [taskSchema]
});

const user = mongoose.model("users", userSchema);
module.exports = user;