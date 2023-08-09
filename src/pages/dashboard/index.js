import React from "react";
import { Grid, colors } from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import TicketHolder from "../../components/TicketHolder";
import DashboardTop from "../../components/DashboardTop/DashboardTop";
import Sidebar from "../../components/Sidebar/index";
const Dashboard = () => (
  <div>
    <Grid container spacing={4} style={{ width: "100%", height: "100vh" }}>
      <Grid item md={2} style={{ backgroundColor: colors.lightBlue[50] }}>
        {/* <h1>Sidebar</h1> */}
        <Sidebar/>
      </Grid>
      <Grid item md={10} style={{ backgroundColor: colors.blueGrey[50] }}>
        <DashboardTop />
        <DashboardHeader />
        {/* <hr/> */}
        {/* <TicketHolder/> */}
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
