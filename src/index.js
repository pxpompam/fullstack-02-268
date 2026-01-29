require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send("Hello Good World Montakan!");
});

app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
});
