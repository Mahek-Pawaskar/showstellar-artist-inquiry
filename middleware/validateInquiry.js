const validateInquiry = (req, res, next) => {
    const { name, phone, event_date, artist_name } = req.body;
  
    if (!name || !phone || !event_date || !artist_name) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }
  
    next();
  };
  
  module.exports = validateInquiry;