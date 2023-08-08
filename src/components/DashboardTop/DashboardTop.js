import React, { useState } from 'react';
import './DashboardTop.css'; // Import the CSS file

const DashboardTop = () => {
    const handleSearch = (e) => {
        // Implement your search logic here (e.g., filtering tasks based on search query)
        // For this example, we will just log the search query to the console
        console.log(e.target.value);
    };

    return (
        <div className="dashboard-container">
            <div className="header-topic">
                <span>Projects / DPG / Workbench</span>
                <h2>DPG:Workbench:Aug H1:23-24:Q2</h2>
                <div className='search-div'>
                    <div className="search-container">
                        <input type="text" placeholder="Search on board" onChange={handleSearch} />
                        <div className="search-icon">
                            {/* You can use an SVG or font icon for the search icon */}
                            {/* For this example, we'll use the Unicode character for a search icon */}
                            &#128269;
                        </div>
                    </div>
                    <div className="circles-container">
                        <div className="circle">GM</div>
                        <div className="circle">DM</div>
                        <div className="circle">PM</div>
                        {/* Add more circles for other names */}
                    </div>
                    <button className="workbench-button">Workbench</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardTop;
