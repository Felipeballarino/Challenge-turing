const { Router } = require("express");
const router = Router();

const { getUser } = require("../services/user.service");
const {
  getTodoByID,
  createTodo,
  deleteTodo,
  todoCompleted,
} = require("../services/todos.service");

//LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser(email, password);
  if (user) {
    res.status(201).send(user);
  } else {
    res.status(400).send({ mensaje: "error" });
  }
});

//TRAER TODOS LOS TODOS
router.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todos = await getTodoByID(id);
  res.status(200).send(todos);
});

//AGREGAR TODOS
router.post("/todos", async (req, res) => {
  const { user_id, fecha, descripcion } = req.body;
  const todo = await createTodo(user_id, fecha, descripcion, false);
  res.status(201).send(todo);
});

//COMPLETAR TODOS
router.put("/todos/:id", async (req, res) => {
  const { value } = req.body;
  const todo = await todoCompleted(req.params.id, value);
  res.status(200).send(todo);
});

//BORRAR TODO
router.delete("/todos/:id", async (req, res) => {
  await deleteTodo(req.params.id);
  res.send({ message: "Todo deleted successfully" });
});

module.exports = router;
