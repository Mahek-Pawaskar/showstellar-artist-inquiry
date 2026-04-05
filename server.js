const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const inquiryRoutes = require("./routes/inquiryRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes (ONLY ONCE)
app.use("/api/inquiries", inquiryRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB ERROR:", err));

// test route (for debugging)
app.get("/", (req, res) => {
  res.send("API Running");
});

// server
app.listen(5000, () => console.log("Server running on port 5000"));