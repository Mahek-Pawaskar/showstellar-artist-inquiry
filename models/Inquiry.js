const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    event_date: { type: Date, required: true },
    location: String,
    artist_name: { type: String, required: true },
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);