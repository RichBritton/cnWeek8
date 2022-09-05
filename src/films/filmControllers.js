const Film = require("./filmModel");

exports.addFilm = async (req, res) => {
  try
  {
    const newFilm = new Film(req.body);
    await newFilm.save();
    res.status(201).send({ title: newFilm.title, director:newFilm.director });
  }
  catch (error)
  {
    if (error.code === 11000)
    {
      res.status(400).send({ error: "Film title already used" });
    }
    else
    {
      res.status(500).send({ error: "Oops" });
    }
  }
}

exports.removeFilm = async (req, res) => {
  const { title } = req.body;

  try
  {
    const film = await Film.findByCredentials(title);
    await Film.deleteOne(film);
    res.status(200).send({ message: film.title+" removed" });
  }
  catch (error)
  {
    res.status(400).send({ error: error.message });
  }
}

exports.updateFilm = async (req, res) => {

  const { title, director } = req.body;

  try
  {
    const query = { "title": title };
    const update = { $set: {"director": director} };
    await Film.updateOne(query, update);

    res.status(200).send({ message: title+" updated" });
  }
  catch (error)
  {
    res.status(400).send({ error: error.message });
  }
}


exports.listFilms = async (req, res) => {
  try
  {
      const listFilms = await Film.find({});
      const listOfFilms = listFilms.map((films) => {
          return films;
      })
      res.status(200).send({users: listOfFilms})
  }
  catch (error)
  {
      console.log(error)
      res.status(500).send({ error: error.message });
  }
}
