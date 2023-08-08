import { useState } from "react";
import { Button } from "@mui/material";
import PopupScreen from "./components/CreateIssue";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
