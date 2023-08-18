import React from "react";
import { Grid, colors } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import TicketHolder from "../../components/TicketHolder";
import DashboardTop from "../../components/DashboardTop/DashboardTopWithInbox";
import Sidebar from "../../components/Sidebar/index";
import Navbar from "../../components/Navbar";
import Inbox from "../../components/Navbar/inbox.js";
import DashboardHeaderWithInbox from "../../components/DashboardHeader/DashboardHeaderWithInbox";
import DashboardTopWithInbox from "../../components/DashboardTop/DashboardTopWithInbox";

const DashboardWithInbox = () => (
  <div>
    <Inbox />
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ flex: "0 0 17%", backgroundColor: colors.lightBlue[50], paddingLeft: "0px" }}>
        {/* <h1>Sidebar</h1> */}
        <Sidebar />
      </div>
      <div style={{ flex: "1", backgroundColor: colors.blueGrey[50], maxWidth: "calc(100% - 17%)" }}>
        <DashboardTopWithInbox />
        {/* <DashboardHeaderWithInbox /> */}
        {/* <hr/> */}
        {/* <TicketHolder/> */}
      </div>
    </div>
  </div>
);

export default DashboardWithInbox;