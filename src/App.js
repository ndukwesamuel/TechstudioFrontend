import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import About from "./Page/About";
import Home from "./Page/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
