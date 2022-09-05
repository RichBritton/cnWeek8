const { Router } = require("express");
const { addUser, login, listUsers, removeUser, updateUser } = require("./userControllers");
const { hashPassword, tokenCheck } = require("../middleware");

const userRouter = Router();

userRouter.post("/user/signup", [hashPassword], addUser);
userRouter.post("/user/login", login);
userRouter.get("/user/list", [tokenCheck], listUsers);
userRouter.post("/user/remove", [tokenCheck], removeUser);
userRouter.patch("/user/update", [hashPassword,tokenCheck], updateUser);


module.exports = userRouter;