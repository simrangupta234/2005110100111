// app.js
const express = require("express");
const cors = require("cors");

const app = express();

// train schedule data
const trainScheduleData = [
  {
    trainName: "train 1",
    departureTime: "06:00 AM",
    arrivalTime: "7:00 AM",
  },
  {
    trainName: "train 2",
    departureTime: "8:00 AM",
    arrivalTime: "9:00 PM",
  },
];

// Enable CORS for all routes
app.use(cors());

// API endpoint to get the train schedule
app.get("/train-schedule", (req, res) => {
  res.json(trainScheduleData);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
