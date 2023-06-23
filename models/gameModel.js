const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Por favor, insira um nome"],
  },
  rating: {
    type: Number,
    required: [true, "Por favor, insira uma nota"],
    default: 0,
  },
  desc: {
    type: String,
    required: [true, "Por favor, insira uma descrição"],
  },
  image: {
    type: String,
    required: [true, "Por favor, insira uma imagem"],
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
