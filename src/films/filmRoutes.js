const { Router } = require("express");
const { addFilm, removeFilm, updateFilm, listFilms } = require("./filmControllers");
const { tokenCheck } = require("../middleware");

const filmRouter = Router();

filmRouter.post("/film/add", [tokenCheck], addFilm);
filmRouter.post("/film/remove", [tokenCheck], removeFilm);
filmRouter.patch("/film/update", [tokenCheck], updateFilm);
filmRouter.get("/film/list", [tokenCheck], listFilms);

module.exports = filmRouter;