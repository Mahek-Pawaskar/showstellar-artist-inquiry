const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

// CREATE
router.post("/", async (req, res) => {
  console.log("BODY:", req.body);

  const { name, phone, event_date, artist_name } = req.body;

  if (!name || !phone || !event_date || !artist_name) {
    return res.status(400).json({
      error: "Missing required fields",
      received: req.body
    });
  }

  try {
    const data = await Inquiry.create(req.body);
    console.log("SAVED:", data);
    res.status(201).json(data);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// READ (ADMIN)
router.get("/", async (req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });
    console.log("FETCHED:", data.length);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Fetch error" });
  }
});

module.exports = router;