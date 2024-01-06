const mongoose = require("mongoose");

mongoose.connect(
  "put_your_mongoDB_connection_URI"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo
};
