// DashboardHeader.js

import React from "react";
import IssueCard from "../IssueCard/IssueCard";
import { useSelector } from "react-redux";

import "./style.css"; // Import your static CSS file

const DashboardHeaderWithInbox = () => {
  const cards = useSelector((state) => state.cards);
  return (
    <div className="dashboard-container">
      <div className="scroll-container">
        <div className="grid-container">
          {["To Do", "In Progress", "Reopened", "On Hold", "To Review", "In Review", "Invalid", "Dropped", "Signed Off"].map((item) => (
            <div key={item} className="grid-column">
              <div className="column-header">{item}</div>
              {item === "To Do" &&
                cards.map((formData, index) => (
                  <IssueCard key={index} formData={formData} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardHeaderWithInbox;
