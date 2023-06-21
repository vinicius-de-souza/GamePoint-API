const express = require("express");
const app = express();

//router routes

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
