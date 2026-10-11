require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Progree Docker App";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Progree Task 2!",
    application: APP_NAME,
    status: "Running successfully"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    project: "Application Containerization & Asset Optimization",
    internship: "Progree",
    technology: "Node.js, Express, Docker"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`${APP_NAME} running on port ${PORT}`);
});