import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleJobDetails from "../pages/SingleJobDetails";
import SearchResult from "../pages/SearchResult";
import Internship from "../pages/Internship";
import Jobs from "../pages/Jobs";
import Employer from "../pages/Employer";
const Routers = () => {
  return (
    <Routes>
      <Route path="/internship" element={<Internship />} />
      <Route path="/employer" element={<Employer />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/search-result" element={<SearchResult />} />
      <Route path="/job/:id" element={<SingleJobDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
