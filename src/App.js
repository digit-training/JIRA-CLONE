import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage/HomePage";
import SignUp from "./components/Navbar/signup";

function App() {


  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/JIRA-CLONE" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
