// HomePage.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Dashboard from "../dashboard";
import Inbox from "../../components/Navbar/inbox";
import DashboardWithInbox from "../dashboard/DashboardWithInbox";

function HomePage() {
  return (
    <OutletContent />
  );
}

function OutletContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inbox" element={<DashboardWithInbox />} />
      </Routes>
    </>
  );
}

export default HomePage;
