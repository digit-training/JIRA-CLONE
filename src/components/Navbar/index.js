import ApiIcon from "@mui/icons-material/Api";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@mui/material";
import PopupScreen from "../CreateIssue";

function Navbar() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

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
    <div id="navbar">
      <button
        className="more-options-button"
        style={{ marginLeft: "20px" }}
        onClick={handleMoreOptionsClick}
      >
        <i className="fas fa-ellipsis-v"></i>
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
