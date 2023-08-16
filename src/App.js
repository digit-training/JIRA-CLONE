import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage/HomePage";
import SignUp from "./components/Navbar/signup";
import Dashboard from "./pages/dashboard";
import DashboardWithInbox from "./pages/dashboard/DashboardWithInbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/JIRA-CLONE">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Dashboard />} />
        <Route path="/inbox" element={<DashboardWithInbox/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
