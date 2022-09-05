const express = require("express");
require("./db/connection");
const userRouter = require("./users/userRoutes");
const filmRouter = require("./films/filmRoutes");
const { tokenCheck } = require("./middleware");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRouter);
app.use(filmRouter);

app.get("/", tokenCheck, (req, res) => {
  res.status(200).send({ message: "You should only see if this if you are logged in" });
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});