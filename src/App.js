import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArtistsPage from "./pages/ArtistsPage";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<ArtistsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

    </Router>
  );
}

export default App;