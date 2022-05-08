import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LearningTrack from "./Page/General/LearningTrack";

function App() {
  return (
    <BrowserRouter>
      <section className="main_dashboard">
        <Routes>
          <Route path="/" element={<LearningTrack />} />
          <Route path="class" element={<div> School</div>} />
          <Route path="message" element={<div> message</div>} />
          <Route path="task" element={<div> TAsk</div>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
