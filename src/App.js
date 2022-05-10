import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import About from "./Page/About";
import Home from "./Page/Home";

function App() {
  return (
    <BrowserRouter>
      <section className="main_dashboard">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/dashboard" element={<div> School</div>} />
          <Route path="message" element={<div> message</div>} />
          <Route path="task" element={<div> TAsk</div>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
