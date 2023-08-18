import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import './DashboardTopWithInbox.css';
import fetchData from '../../fetchData';
import pgrData from '../../alternateJSON/PGRJSON';
import dtrData from '../../alternateJSON/DTRJSON';
import editRenewalData from '../../alternateJSON/EDITRENEWALJSON';
import PGRProcess from '../../alternateJSON/PGRProcess';
import EDITRENEWALProcess from '../../alternateJSON/EDITRENEWALProcess.js';
import DTRProcess from '../../alternateJSON/DTRProcess';

import DashboardHeaderWithInbox from "../DashboardHeader/DashboardHeaderWithInbox" // Import DashboardHeaderWithInbox

const DashboardTopWithInbox = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Workbench');

    const handleSearch = (e) => {
        console.log(e.target.value);
    };

    const fetchDataAndUpdateState = async (selectedOption) => {
        if (selectedOption == "Workbench" || selectedOption == undefined) {
            return;
        }
        const url = '/egov-wf/businessservice/_search';
        const url2 = '/egov-wf/process/_search';
        const params = { tenantId: 'pb.amritsar', businessServices: selectedOption };
        const additionalData = {};

        try {
            const response = await fetchData(url, params, additionalData);
            const states = response?.data?.BusinessServices?.[0]?.states || [];
            const stateNames = states.map((state) => state.state);
            stateNames[0] = 'TODO';
            const newStateNames = stateNames.slice(1);

            return newStateNames;
        } catch (error) {
            let response = { data: {} };
            if (selectedOption === 'PGR') {
                response.data = pgrData;
            } else if (selectedOption === 'EDITRENEWAL') {
                response.data = editRenewalData;
            } else {
                response.data = dtrData;
            }

            const states = response?.data?.BusinessServices?.[0]?.states || [];
            const stateNames = states.map((state) => state.state);
            stateNames[0] = 'TODO';
            const newStateNames = stateNames.slice(1);

            return newStateNames;
        }
    };

    const fetchCardsAndUpdateState = async (selectedOption) => {
        if (selectedOption == "Workbench" || selectedOption == undefined) {
            return [];
        }
        const url2 = '/egov-wf/process/_search';
        const params = { tenantId: 'pb.amritsar', businessService: selectedOption };
        const additionalData = {};

        try {
            const response2 = await fetchData(url2, params, additionalData);
            return response2?.data?.ProcessInstances;
        } catch (error) {
            let response2 = { data: {} };
            if (selectedOption === 'PGR') {
                response2.data = PGRProcess;
            } else if (selectedOption === 'EDITRENEWAL') {
                response2.data = EDITRENEWALProcess;
            } else if (selectedOption === 'DTR') {
                response2.data = DTRProcess;
            }
            return response2?.data?.ProcessInstances;
        }
    };

    const fetchCount = async (selectedOption) => {
        if (selectedOption == "Workbench" || selectedOption == undefined) {
            return 0;
        }
        const url = '/egov-wf/process/_count'; // Replace with your API endpoint
        const params = { tenantId: 'pb.amritsar', businessService: selectedOption };
        const additionalData = {};

        try {
            const response = await fetchData(url, params, additionalData);
            console.log(response, "rrrrrrrrrrrrrrr")
            return response?.data || 0;
        } catch (error) {
            // Handle error
            let response = { data: {} };
            if (selectedOption === 'PGR') {
                response.data = 2748;
            } else if (selectedOption === 'EDITRENEWAL') {
                response.data = 192;
            } else {
                response.data = 1;
            }
            return response?.data;
        }
    };

    const queryClient = useQueryClient(); // Initialize queryClient

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleOptionSelect = async (option) => {
        setSelectedOption(option);
        toggleDropdown();

        // Refetch the queries for the new selected option
        // await queryClient.invalidateQueries(['apiData', option]);
        await queryClient.invalidateQueries(['cardsData', option]);
        // await queryClient.invalidateQueries(['countData', option]);
    };

    const { data: newStateNames } = useQuery(['apiData', selectedOption], () => fetchDataAndUpdateState(selectedOption), {
        staleTime: 600000, // Set the duration in milliseconds
    });
    const { data: cardsData } = useQuery(['cardsData', selectedOption], () => fetchCardsAndUpdateState(selectedOption));
    const { data: countData } = useQuery(['countData', selectedOption], () => fetchCount(selectedOption));
    // queryClient.setQueryData(['countData', selectedOption], countData);
    // console.log(countData, "ccccccccccccccccc")

    return (
        <div className="dashboardtop-container">
            <div className="header-topic">
                <span>Projects / DPG / Workbench</span>
                <h2>DPG:Workbench:Aug H1:23-24:Q2</h2>
                <div className="search-div">
                    <div className="search-container">
                        <input type="text" placeholder="Search on board" onChange={handleSearch} />
                        <div className="search-icon">&#128269;</div>
                    </div>
                    <div className="circles-container">
                        <div className="circle">GM</div>
                        <div className="circle">DM</div>
                        <div className="circle">PM</div>
                        <div className="workbench-dropdown">
                            <button className="workbench-button" onClick={toggleDropdown}>
                                <span className="p-10">{selectedOption}</span>
                                <span className="dropdown-icon">&#9660;</span>
                            </button>
                            {showDropdown && (
                                <div className="dropdown-content">
                                    <div onClick={() => handleOptionSelect('PGR')}>PGR</div>
                                    <div onClick={() => handleOptionSelect('EDITRENEWAL')}>EDITRENEWAL</div>
                                    <div onClick={() => handleOptionSelect('DTR')}>DTR</div>
                                </div>
                            )}
                        </div>
                        <div className="count-button">
                            Count: {countData}
                        </div>
                    </div>
                </div>
            </div>
            <DashboardHeaderWithInbox selectedOption={selectedOption} />
        </div>
    );
};

export default DashboardTopWithInbox;
