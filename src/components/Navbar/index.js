import ApiIcon from "@mui/icons-material/Api";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { Button } from "@mui/material";
import PopupScreen from "../CreateIssue";
import Inbox from "./inbox";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleInboxClick = () => {
    navigate('/inbox'); // Navigate to the Inbox page under /home
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleMoreOptionsClick = () => {
    // Implement your more options logic here
    alert("Clicked More Options!");
  };
  
  const handleHomeClick = () => {
    // Implement your home link logic here
    alert("You clicked Home!");
  };

  // const handleSignupClick = () => {
  //   // Implement your signup logic here
  //   navigate('/signup')
  //   //alert("You clicked Signup!");
  // };

  const handleSidebarToggle = () => {
    // Implement your sidebar toggle logic here
    alert("Toggled Sidebar!");
  };


  const handleProfileClick = () => {
    // Implement your profile logic here
    alert("You clicked Profile!");
  };

  const handleProjectsClick = () => {
    // Implement your profile logic here
    alert("You clicked Projects!");
  };

  const handleSearchEnter = (event) => {
    if (event.key === "Enter") {
      // Implement your search logic here
      const searchInput = document.getElementById("search");
      alert("Searching for: " + event.target.value);
    }
  };

  return (
    <div id="navbar" className="flex items-center justify-between">
      <button 
      className="more-options-button md:hidden ml-3"
      onClick={handleSidebarToggle}>
        {/* <i className="fas fa-ellipsis-v"></i> */}
        <i className="fas fa-bars"></i>
      </button>
      <ApiIcon style={{ marginLeft: "3px" }}></ApiIcon>
      <span>Jira Software</span>

      <a href="#" onClick={handleHomeClick}>
        Home
      </a>
      <a href="#" onClick={handleProjectsClick}>
        Projects
      </a>
      <a href="#" onClick={handleProfileClick}>
        Profile
      </a>
      <a href="#" onClick={handleInboxClick}>
        Inbox
      </a>
 


      <Button variant="contained" color="primary" onClick={handleOpenPopup}>
        Create Issue
      </Button>
      <PopupScreen open={isPopupOpen} onClose={handleClosePopup} />

      <div className="search-container">
        <input
          type="text"
          id="search"
          placeholder="Search"
          onKeyPress={handleSearchEnter}
        />
        <i className="fas fa-search search-icon"></i>
      </div>
      <NotificationsIcon style={{ marginRight: "5px" }}> </NotificationsIcon>
      <div className="settings-icon" style={{ marginRight: "20px" }}>
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
}

export default Navbar;