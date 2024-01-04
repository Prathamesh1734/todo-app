const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./database");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Incorrect inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo created!",
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Incorrect inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: updatePayload._id,
    },
    { completed: true }
  );
});

app.listen(3000, function () {
  console.log("Started on 3000");
});
