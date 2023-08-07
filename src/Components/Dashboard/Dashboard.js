import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', status: 'To Do' },
        { id: 2, title: 'Task 2', status: 'In Progress' },
        { id: 3, title: 'Task 3', status: 'Done' },
        // Add more tasks as needed
    ]);

    const handleSearch = (e) => {
        // Implement your search logic here (e.g., filtering tasks based on search query)
        // For this example, we will just log the search query to the console
        console.log(e.target.value);
    };


    return (
        <div className="dashboard-container">
            <div className="header-topic">
                {/* <div> */}
                <span>Projects / DPG / Workbench</span>
                <h2>DPG:Workbench:Aug H1:23-24:Q2</h2>
                <div className="search-container">
                    <input type="text" placeholder="Search on board" onChange={handleSearch} />
                    <div className="search-icon">
                        {/* You can use an SVG or font icon for the search icon */}
                        {/* For this example, we'll use the Unicode character for a search icon */}
                        &#128269;
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* <br></br> */}
            {/* <div className="filter-container">
                <label>Filter by Status:</label>
                <select value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="task-list">
                {filteredTasks.map(task => (
                    <div key={task.id} className="task-card">
                        <h3>{task.title}</h3>
                        <p className={`task-status ${task.status.toLowerCase().replace(/\s/g, '-')}`}>{task.status}</p>
                    </div>
                ))}
            </div> */}

        </div>
    );
};

export default Dashboard;
