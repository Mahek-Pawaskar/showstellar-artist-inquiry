import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg shadow-md border-b border-white/20">

      <h1 className="text-xl font-bold text-purple-700">
        ShowStellar
      </h1>

      <div className="space-x-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white"
        >
          Artists
        </Link>

        <Link
          to="/admin"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
        >
          Admin
        </Link>
      </div>
    </div>
  );
};

export default Navbar;