import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import LearningTrack from "./Page/General/LearningTrack";


function App() {
  return (
    <BrowserRouter>
      <section className="main_dashboard">
        <Routes>
          <Route path="/" element={<LearningTrack />} />
          <Route path="/dashboard" element={<div> School</div>} />
          <Route path="message" element={<div> message</div>} />
          <Route path="task" element={<div> TAsk</div>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
