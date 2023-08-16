import React from "react";
import { useSelector } from "react-redux";
import IssueCard from "../IssueCard/IssueCard";

import "./style.css"; // Import your static CSS file

const DashboardHeaderWithInbox = () => {
  const cards = useSelector((state) => state.cards);
  const businessServiceStates = useSelector((state) => state.businessServiceStates);

  return (
    <div className="dashboard-container">
      <div className="scroll-container">
        <div className="grid-container">
          {businessServiceStates.map((item) => (
            <div key={item} className="grid-column">
              <div className="column-header">{item}</div>
              {/* Render your IssueCard components here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeaderWithInbox;
