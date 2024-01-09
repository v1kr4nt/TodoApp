const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/todos").then((e) => {
  console.log("mongodb connected");
});

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ message: "Wrong Inputs" });
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ message: "Todo created" });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});

app.post("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = createTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ message: "Wrong Inputs" });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
  res.json({ message: "Todo marked as done" });
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
