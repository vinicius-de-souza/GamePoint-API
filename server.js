const express = require("express");
const mongoose = require("mongoose");
const Game = require("./models/gameModel");
const app = express();

app.use(express.json());

//ROUTES

//Fetch all games
app.get("/games", async (req, res) => {
  try {
    const games = await Game.find({});
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Fetch single game
app.get("/games/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Add Game
app.post("/games", async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(200).json(game);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Update Game
app.put("/games/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByIdAndUpdate(id, req.body);

    if (!game) {
      return res
        .status(404)
        .json({ message: `Cannot find any game with ${id}` });
    }
    const updategame = await Game.findById(id);

    res.status(200).json(updategame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete Game
app.delete("/games/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByIdAndDelete(id);
    if (!game) {
      return res
        .status(404)
        .json({ message: `Cannot find any item with ${id}` });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://admin:admin@gamepointapi.bh2eoin.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
    console.log("Succesfully connected to MongoDB");
  })
  .catch((err) => {
    console.log(error);
  });
