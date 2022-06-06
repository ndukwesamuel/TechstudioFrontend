import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useGlobalContext } from "./context/AuthContext";
import About from "./Page/About";
import Contact from "./Page/Contact/Contact";
import Course from "./Page/Courses/Course";
import Datascience from "./Page/Courses/Datascience";
import Frontend from "./Page/Courses/Frontend";
import Fullstack from "./Page/Courses/Fullstack";
import Mobile from "./Page/Courses/Mobile";
import Uiux from "./Page/Courses/Uiux";
import DashboardHome from "./Page/Dashboard/DashboardHome";
import Dashboard_User from "./Page/Dashboard/Dashboard_User";
import Employers from "./Page/Employer/Employers";
import Home from "./Page/Home";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUP/SignUp";

function App() {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={user ? <Home /> : <Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        /> */}
        {/* 
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/employer" element={<Employers />} /> */}
        <Route path="/DashboardHome" element={<DashboardHome />} />
        <Route path="/Dashboard_User" element={<Dashboard_User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
