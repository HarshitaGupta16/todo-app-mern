const Todos = require("../modals/Todos");

const addTodo = async (request, response) => {
  try {
    const newTodo = await Todos.create({
      item: request.body.item,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const getAllTodos = async (request, response) => {
  try {
    const todos = await Todos.find({}).sort({ createdAt: -1 }); // sort by latest (i.e descending order)
    return response.status(200).json(todos);
  } catch (error) {
    return response.send(404).json(error.message);
  }
};

const editTodo = async (request, response) => {
  try {
    const todo = await Todos.findOneAndUpdate(
      { _id: request.params.id },
      { item: request.body.item }
    );
    return response.status(200).json(todo);
  } catch (error) {
    return response.send(500).json(error.message);
  }
};

const deleteTodo = async (request, response) => {
  try {
    const todos = await Todos.findOneAndDelete({ _id: request.params.id });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = {
  addTodo,
  getAllTodos,
  editTodo,
  deleteTodo,
};
