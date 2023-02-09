import React from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import { RamyaGopal } from "./pages/ramya-gopal/ramya-gopal";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/ramya-gopal/HomePage/HomePage.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ramya-gopal-wedding" element={<RamyaGopal />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
