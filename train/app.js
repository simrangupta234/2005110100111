const express = require("express");
const app = express();
const cors = require("cors");
const trainsData = require("./trains.json");
const register = require("./register.json");
const auth = require("./auth.json");

app.use(cors());

const port = 3000;

// Endpoint to get all train schedules for the next 12 hours

app.get("/", (req, res) => {
  res.send("Hello World");
});

//resgister
app.get("/register", (req, res) => {
  res.send(register);
});

//auth
app.get("/auth", (req, res) => {
  res.send(auth);
});

//trains

app.get("/trains", (req, res) => {
  res.send(trainsData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
