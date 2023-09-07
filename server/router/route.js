const express = require("express");

const router = express.Router();

const {
  addTodo,
  getAllTodos,
  editTodo,
  deleteTodo,
} = require("../controllers/todoControllers");

router.get("/", getAllTodos);

router.post("/", addTodo);

router.put("/:id", editTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
