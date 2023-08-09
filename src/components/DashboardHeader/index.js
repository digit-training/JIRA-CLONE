import React from "react";
import { Grid, colors} from "@mui/material";
// import TicketHolder from "../TicketHolder";
const DashboardHeader = () => (
  <div>
    <Grid container spacing={2} style={{ backgroundColor: colors.blueGrey[50], padding: "0px" }} >
      <Grid item md={12} >
        <Grid container spacing={2} >
            {["To Do","In Progress","Reopened","On Hold","To Review","In Review","Invalid","Dropped","Signed Off"].map( (item) => {
                 return (
                   <>
                    <Grid item xs={1.2} style={{backgroundColor:colors.amber[100]}} margin={{margin:"6px"}} key={item} padding={{padding:"20px"}}>  
                            <span>{`${item}`}</span>
                    </Grid>
                   </>
                 )
            } )}
             {["To Do","In Progress","Reopened","On Hold","To Review","In Review","Invalid","Dropped","Signed Off"].map( (item) => {
                 return (
                   <>
                    <Grid item xs={1.2} style={{backgroundColor:colors.grey[100] , height:"90vh"}} margin={{margin:"6px"}} key={item} padding={{padding:"20px"}}>  
                    </Grid>
                   </>
                 )
            } )}
            </Grid>
          </Grid>
     </Grid>
  </div>
);

export default DashboardHeader;
