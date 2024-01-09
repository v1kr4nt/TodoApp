const express = require("express");
const { createTodo } = require("./types");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({ message: "Wrong Inputs" });
  }
});

app.get("/todos", (req, res) => {});

app.post("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = createTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({ message: "Wrong Inputs" });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
