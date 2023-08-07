import React from "react";
import { Grid, colors } from "@mui/material";

const TicketHolder = () => (
  <div>
    <Grid container spacing={4} style={{ backgroundColor: colors.grey[50] }}>
      {["To Do", "In Progress", "Reopened", "On Hold", "To Review", "In Review", "Invalid", "Dropped", "Signed Off"].map((item) => (
        <Grid item xs={3} style={{ backgroundColor: colors.amber[100], margin: "6px", padding: "20px", flexGrow: 1 }} key={item}>
          <span>{item}</span>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default TicketHolder;
