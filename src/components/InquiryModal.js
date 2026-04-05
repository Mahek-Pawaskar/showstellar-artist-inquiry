import React, { useState } from "react";
import axios from "axios";

const InquiryModal = ({ artist, close }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event_date: "",
    location: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      event_date: form.event_date,
      location: form.location.trim(),
      message: form.message.trim(),
      artist_name: artist?.name
    };

    console.log("SENDING:", payload);

    if (!payload.name || !payload.phone || !payload.event_date || !payload.artist_name) {
      setToast("All required fields must be filled");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/inquiries", payload);
      setToast("Inquiry submitted successfully");

      // reset form
      setForm({
        name: "",
        phone: "",
        event_date: "",
        location: "",
        message: ""
      });

    } catch (err) {
      console.log("ERROR:", err.response?.data);
      setToast("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">

      <div className="w-[400px] bg-white rounded-2xl shadow-2xl p-6">

        <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">
          Book {artist.name}
        </h2>

        {toast && (
          <div className="mb-3 text-center text-white bg-purple-600 py-2 rounded">
            {toast}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded-lg p-2"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border rounded-lg p-2"
          />

          <input
            type="date"
            name="event_date"
            value={form.event_date}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Event Location"
            className="w-full border rounded-lg p-2"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border rounded-lg p-2"
          />

          {/* AUTO FILLED ARTIST */}
          <input
            value={artist.name}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />

          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg">
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>

        <button
          onClick={close}
          className="mt-3 w-full text-center text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InquiryModal;