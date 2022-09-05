const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const filmSchema = new mongoose.Schema({
  title:
  {
    type: String,
    required: true,
    unique:true,
  },
  director:
  {
    type: String,
    default:"unspecified",
  },
});


filmSchema.statics.findByCredentials = async (title) => {
  const film = await Film.findOne({ title });

  if (!title)
  {
    throw new Error("Couldn't find film");
  }

  return film;
};


const Film = mongoose.model("Film", filmSchema);

module.exports = Film;