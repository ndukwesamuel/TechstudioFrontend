import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Page/About";
import Contact from "./Page/Contact/Contact";
import Course from "./Page/Courses/Course";
import Datascience from "./Page/Courses/Datascience";
import Frontend from "./Page/Courses/Frontend";
import Fullstack from "./Page/Courses/Fullstack";
import Mobile from "./Page/Courses/Mobile";
import Uiux from "./Page/Courses/Uiux";
import Employers from "./Page/Employer/Employers";
import Home from "./Page/Home";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUP/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/employer" element={<Employers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
