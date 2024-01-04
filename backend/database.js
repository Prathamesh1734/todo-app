const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Q6gjhpctds@cluster0.vc7ix2m.mongodb.net/"
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
