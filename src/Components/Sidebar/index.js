import React from "react";
import "./index.css";
import { SidebarData } from "./SidebarData";

function Sidebar(){
    return(
        <div className="Sidebar">
            <div className="dpg">
                <h1>DPG</h1>
                <h2>Software Project</h2>
            </div>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return(
                        <li key={key} className="row">
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar