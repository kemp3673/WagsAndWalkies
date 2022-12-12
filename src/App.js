import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import GalleryPage from "./pages/gallery.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
