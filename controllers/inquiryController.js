const Inquiry = require("../models/Inquiry");

exports.createInquiry = async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body);

    const { name, phone, event_date, location, artist_name, message } = req.body;

    if (!name || !phone || !event_date || !artist_name) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const newInquiry = new Inquiry({
      name,
      phone,
      event_date,
      location,
      artist_name,
      message
    });

    const saved = await newInquiry.save();

    console.log("SAVED DATA:", saved);

    res.status(201).json({ message: "Inquiry submitted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};