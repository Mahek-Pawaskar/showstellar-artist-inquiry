import React from "react";

const ArtistCard = ({ artist, onBook }) => {
  return (
    <div className="relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

      
      <img
      src={artist.image}
      alt={artist.name}
      className="w-full h-56 object-contain bg-gray-100 rounded"
      />

      <div className="p-4 text-gray-800">
        <h2 className="text-xl font-bold">{artist.name}</h2>

        <div className="flex justify-between text-sm mt-1">
          <span className="bg-purple-200 px-2 py-1 rounded">
            {artist.category}
          </span>
          <span>{artist.location}</span>
        </div>

        <p className="mt-2 text-lg font-semibold text-purple-700">
          {artist.price}
        </p>

        <button
          onClick={() => onBook(artist)}
          className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:opacity-90"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;