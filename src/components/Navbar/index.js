import React from 'react';
import './Navbar.css'; 


function Navbar() {


  const handleMoreOptionsClick = () => {
    // Implement your more options logic here
    alert('Clicked More Options!');
  };

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


  const handleProjectsClick = () => {
    // Implement your profile logic here
    alert('You clicked Projects!');
  };

  const handleSearchEnter = (event) => {
    if (event.key === 'Enter') {
      // Implement your search logic here
      const searchInput = document.getElementById('search');
      alert('Searching for: ' + event.target.value);
    }
  };

  return (
    <div id="navbar">
      <button className="more-options-button" onClick={handleMoreOptionsClick}>
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <a href="#" onClick={handleHomeClick}>Home</a>
      <a href="#" onClick={handleProjectsClick}>Projects</a>
      <a href="#" onClick={handleSignupClick}>Signup</a>
      <a href="#" onClick={handleProfileClick}>Profile</a>
      
      <div className="search-container">
        <input type="text" id="search" placeholder="Search" onKeyPress={handleSearchEnter} />
        <i className="fas fa-search search-icon"></i>
      </div>
      <div className="settings-icon">
        <i className="fas fa-cog"></i>
      </div>
      
    </div>
  );
}

export default Navbar;