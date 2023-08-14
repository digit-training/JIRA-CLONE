import React, { useState } from "react";
import "./index.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="Sidebar md:block hidden">
            <div className="dpg">
                <h1>DPG</h1>
                <h2>Software Project</h2>
            </div>
            {/* Button to toggle sidebar */}
            <button
                className="block lg:hidden px-3 py-2 bg-blue-500 text-white"
                onClick={toggleSidebar}
            >
                Toggle Sidebar
            </button>

            {/* Sidebar menu */}
            <ul className={`SidebarList ${sidebarOpen ? "block" : "hidden"} lg:block`}>
                {SidebarData.map((val, key) => (
                    <li key={key} className="row">
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
