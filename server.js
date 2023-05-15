const express = require("express");
const lolChampions = require("lol-champions");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { lolChampions });
});

app.get("/champion/:id", (req, res) => {
  let champion = lolChampions.find((champion) => champion.id === req.params.id);
  res.render("champion", { champion });
});

app.listen(3000, () => {
  console.log("Listen on port 3000!");
});
