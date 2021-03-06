import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux"; // this is becuse we want to call the global atate and use the reducer

import About from "./Page/About";
import Contact from "./Page/Contact/Contact";
// import Course from "./Page/Courses/Course";
import Datascience from "./Page/Courses/Datascience";
import Frontend from "./Page/Courses/Frontend";
import Fullstack from "./Page/Courses/Fullstack";
import Mobile from "./Page/Courses/Mobile";
import Uiux from "./Page/Courses/Uiux";
import DashboardHome from "./Page/Dashboard/DashboardHome";
import DashboardUser from "./Page/Dashboard/DashboardUser";
import Employers from "./Page/Employer/Employers";
import Home from "./Page/Home";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUP/SignUp";
import DashboardClass from "./Page/Dashboard/DashboardClass";
import DashboardClassDetails from "./Page/Dashboard/DashboardClassDetails";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AdminHome from "./Component/DashboardContainer/Admin/AdminHome";
import DashboardClassLive from "./Page/Dashboard/DashboardClassLive";
import DashboardClassForm from "./Page/Dashboard/DashboardClassForm";

function App() {
  // const { user } = useGlobalContext();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/uiux" element={<Uiux />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/employer" element={<Employers />} />

        {/* user dashborder start here */}
        <Route
          path="/DashboardHome"
          element={user ? <DashboardHome /> : <Login />}
        />

        <Route path="/Dashboard_User" element={<DashboardUser />} />
        <Route path="/DashboardClass" element={<DashboardClass />} />
        <Route path="/DashboardClassForm" element={<DashboardClassForm />} />

        <Route path="/DashboardClassLive" element={<DashboardClassLive />} />

        <Route path="/DashboardClass/:id" element={<DashboardClassDetails />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
