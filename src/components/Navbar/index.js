import React from 'react';
import './Navbar.css';
// import { Jira } from '@mui/icons-material';
import ApiIcon from '@mui/icons-material/Api';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Navbar() {
  const handleHomeClick = () => {
    // Implement your home link logic here
    alert('You clicked Home!');
  };
  const handleSignupClick = () => {
    // Implement your signup logic here
    alert('You clicked Signup!');
  };
  const handleProfileClick = () => {
    // Implement your profile logic here
    alert('You clicked Profile!');
  };
  const handleSearchEnter = (event) => {
    if (event.key === 'Enter') {
      // Implement your search logic here
      alert('Searching for: ' + event.target.value);
    }
  };
  return (
    <div id="navbar">
    <span>
        <ApiIcon style={{ marginRight: '5px' }} /> Jira Software
      </span>
      <a href="#" onClick={handleHomeClick}>Home</a>
      <a href="#" onClick={handleSignupClick}>Signup</a>
      <a href="#" onClick={handleProfileClick}>Profile</a>
      <input type="text" id="search" placeholder="Search" onKeyPress={handleSearchEnter} />
      <NotificationsIcon style={{marginRight: '5px'}}> </NotificationsIcon>
    </div>
  );
}
export default Navbar;