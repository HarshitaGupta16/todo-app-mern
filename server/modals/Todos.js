const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Todos = mongoose.model("todos", TodoSchema);

module.exports = Todos;
