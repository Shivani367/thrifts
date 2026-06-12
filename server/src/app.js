const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Thrifts API is running",
  });
});

const PORT = process.env.PORT || 8000;

connectDB();

console.log(User.modelName);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});