import React from "react";
import { Grid, colors} from "@mui/material";
import DashboardHeader from "../../components/DashboardHeader";
import TicketHolder from "../../components/TicketHolder";
const Dashboard = () => (
  <div>
    <Grid container spacing={4} style={{ width: "100%", height: "100vh" }}>
      <Grid item md={1} style={{ backgroundColor: colors.lightBlue[50]}}>
        <h1>Sidebar</h1>
      </Grid>
      <Grid item md={11} style={{backgroundColor:colors.blueGrey[50]}}>
        <DashboardHeader/>
        {/* <hr/> */}
        {/* <TicketHolder/> */}
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
