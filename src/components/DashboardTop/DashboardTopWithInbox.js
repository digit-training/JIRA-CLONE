import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useQuery } from '@tanstack/react-query';
import './DashboardTopWithInbox.css'; // Import the CSS file
import fetchData from '../../fetchData';
import pgrData from '../../alternateJSON/PGRJSON';
import dtrData from '../../alternateJSON/DTRJSON';
import editRenewalData from '../../alternateJSON/EDITRENEWALJSON';
import PGRProcess from '../../alternateJSON/PGRProcess';
import EDITRENEWALProcess from '../../alternateJSON/EDITRENEWALProcess.js';
import DTRProcess from '../../alternateJSON/DTRProcess';
// import { updateBusinessServiceStates } from '../../redux/actions'; // Import the action creator



const DashboardTopWithInbox = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Workbench');
    const dispatch = useDispatch(); // Get the dispatch function
    const handleSearch = (e) => {
        console.log(e.target.value);
    };

    const { data: apiData, isLoading, error } = useQuery(
        ['apiData', selectedOption],
        async () => {
            const url = '/egov-wf/businessservice/_search';
            var url2 = '/egov-wf/process/_search';
            var params = {};
            const additionalData = {};
            var dataSet = false;
            if (selectedOption === 'PGR') {
                params = { tenantId: 'pb.amritsar', businessServices: 'PGR' };
                dataSet = true;
            } else if (selectedOption === 'EDITRENEWAL') {
                params = { tenantId: 'pb.amritsar', businessServices: 'EDITRENEWAL' };
                dataSet = true;
            } else if ((selectedOption === 'DTR')) {
                params = { tenantId: 'pb.amritsar', businessServices: 'DTR' };
                dataSet = true;
            }
            if (dataSet) {
                try {
                    var response = await fetchData(url, params, additionalData);
                    console.log(response);
                    const states = response?.data?.BusinessServices?.[0]?.states || [];
                    var stateNames = states.map(state => state.state);
                    stateNames[0] = "TODO";
                    const newStateNames = stateNames.slice(1);
                    stateNames = newStateNames;
                    dispatch({
                        type: "UPDATE_BUSINESS_SERVICE_STATES", // Your actual action type
                        payload: stateNames,
                    });
                    console.log(stateNames);
                } catch (error) {
                    var response = {
                        data: {}
                    }
                    if (selectedOption === 'PGR') {
                        response.data = pgrData;
                    } else if (selectedOption === 'EDITRENEWAL') {
                        response.data = editRenewalData;
                    } else {
                        response.data = dtrData;
                    }

                    const states = response?.data?.BusinessServices?.[0]?.states || [];
                    const stateNames = states.map(state => state.state);
                    stateNames[0] = "TODO";
                    dispatch({
                        type: "UPDATE_BUSINESS_SERVICE_STATES", // Your actual action type
                        payload: stateNames,
                    });
                    //console.error(error);
                }
                try {
                    if (selectedOption === 'PGR') {
                        params = { tenantId: 'pb.amritsar', businessService: 'PGR' };
                        dataSet = true;
                    } else if (selectedOption === 'EDITRENEWAL') {
                        params = { tenantId: 'pb.amritsar', businessService: 'EDITRENEWAL' };
                        dataSet = true;
                    } else if ((selectedOption === 'DTR')) {
                        params = { tenantId: 'pb.amritsar', businessService: 'DTR' };
                        dataSet = true;
                    }
                    const response2 = await fetchData(url2, params, additionalData);
                    //console.log(response, " prcoessssssssssssssssssss")
                    dispatch({
                        type: "NEW_CARDS", // Your actual action type
                        payload: response2,
                    });

                } catch (error) {
                    var response2 = {
                        data: {}
                    }
                    if (selectedOption === 'PGR') {
                        response2.data = PGRProcess;
                    } else if (selectedOption === 'EDITRENEWAL') {
                        response2.data = EDITRENEWALProcess;
                    } else if ((selectedOption === 'DTR')) {
                        response2.data = DTRProcess;
                    }
                    dispatch({
                        type: "NEW_CARDS", // Your actual action type
                        payload: response2,
                    });
                    //console.error(error);
                }
            }

            return null;
        }
    );

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        toggleDropdown();
    };

    return (
        <div className="dashboardtop-container">
            <div className="header-topic">
                <span>Projects / DPG / Workbench</span>
                <h2>DPG:Workbench:Aug H1:23-24:Q2</h2>
                <div className='search-div'>
                    <div className="search-container">
                        <input type="text" placeholder="Search on board" onChange={handleSearch} />
                        <div className="search-icon">
                            &#128269;
                        </div>
                    </div>
                    <div className="circles-container">
                        <div className="circle">GM</div>
                        <div className="circle">DM</div>
                        <div className="circle">PM</div>
                        <div className="workbench-dropdown">
                            <button className="workbench-button" onClick={toggleDropdown}>
                                <span className='p-10'>{selectedOption}</span>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopWithInbox;

