import React, { useState } from "react";
import artistsData from "../data/artists";
import ArtistCard from "../components/ArtistCard";
import InquiryModal from "../components/InquiryModal";

const ArtistsPage = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? artistsData
      : artistsData.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">

      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Artist Booking Platform
      </h1>

      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded shadow"
        >
          <option>All</option>
          <option>Singer</option>
          <option>DJ</option>
          <option>Comedian</option>
          <option>Dancer</option>
          <option>Magician</option>
          <option>Rapper</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((artist, i) => (
          <ArtistCard key={i} artist={artist} onBook={setSelected} />
        ))}
      </div>

      {selected && (
        <InquiryModal artist={selected} close={() => setSelected(null)} />
      )}
    </div>
  );
};

export default ArtistsPage;