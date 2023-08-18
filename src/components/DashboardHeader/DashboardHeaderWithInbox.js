import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import IssueCardInbox from '../IssueCard/IssueCardInbox';
import './style.css';

const DashboardHeaderWithInbox = ({ selectedOption }) => {
  const defaultBusinessServiceStates = [
    // 'To Do', 'In Progress', 'Reopened', 'On Hold', 'To Review', 'In Review', 'Invalid', 'Dropped', 'Signed Off'
  ];

  const queryClient = useQueryClient();

  // Use cached data if available or provide a default value
  const businessServiceStates = queryClient.getQueryData(['apiData', selectedOption]) || defaultBusinessServiceStates;
  const processInstances = queryClient.getQueryData(['cardsData', selectedOption]) || [];

  return (
    <div className="dashboard-container">
      <div className="scroll-container">
        <div className="grid-container">
          {(selectedOption == 'Workbench' || selectedOption == undefined)
            ? defaultBusinessServiceStates.map((item) => (
              <div key={item} className="grid-column">
                <div className="column-header">
                  {item} ({processInstances.filter(processInstance => processInstance.state.state === item).length})
                </div>
                {/* <IssueCardInbox key={item} processInstance={null} /> */}
              </div>
            ))
            : businessServiceStates.map((item) => (
              <div key={item} className="grid-column">
                <div className="column-header">
                  {item} ({processInstances.filter(processInstance => processInstance.state.state === item).length})
                </div>
                {processInstances
                  .filter((processInstance) => {
                    return processInstance.state.state === item;
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
