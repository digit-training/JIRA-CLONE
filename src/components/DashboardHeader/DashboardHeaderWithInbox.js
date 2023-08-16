import React from "react";
import { useSelector } from "react-redux";
import IssueCardInbox from "../IssueCard/IssueCardInbox";

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
              {/* Render IssueCard components with matching state */}
              {cards
                .filter((processInstance) => {
                  if (item === "TODO") {
                    return processInstance.state.state === null || processInstance.state.state === item;
                  } else {
                    return processInstance.state.state === item;
                  }
                })
                .map((processInstance, index) => (
                  <IssueCardInbox key={index} processInstance={processInstance} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeaderWithInbox;
