import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Page/Home";

function App() {
  return (
    <BrowserRouter>
      <section className="main_dashboard">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="class" element={<div> School</div>} />
          <Route path="message" element={<div> message</div>} />
          <Route path="task" element={<div> TAsk</div>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
