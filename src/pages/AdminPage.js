import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/api/inquiries`)
      .then((res) => setData(res.data))
      .catch(() => setError("Failed to load data"));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">

      <h1 className="text-3xl font-bold text-center mb-6">
        Admin Dashboard
      </h1>

      {error && (
        <div className="text-center text-red-600 mb-4">{error}</div>
      )}

      <div className="overflow-x-auto bg-white/40 backdrop-blur-lg rounded-xl shadow-lg p-4">

        <table className="w-full text-sm">
          <thead className="bg-purple-300">
            <tr>
              <th className="p-2">Name</th>
              <th>Phone</th>
              <th>Artist</th>
              <th>Date</th>
              <th>Location</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="text-center border-b">

                <td className="p-2">{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.artist_name}</td>
                <td>{new Date(d.event_date).toLocaleDateString()}</td>
                <td>{d.location || "-"}</td>
                <td>{d.message || "-"}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminPage;