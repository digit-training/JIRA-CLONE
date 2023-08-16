import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useQuery } from '@tanstack/react-query';
import './DashboardTopWithInbox.css'; // Import the CSS file
import fetchData from '../../fetchData';
import pgrData from '../../alternateJSON/PGRJSON';
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
            if (selectedOption === 'PGR') {
                const url = '/egov-wf/businessservic/_search';
                const params = { tenantId: 'pb.amritsar', businessServices: 'PGR' };
                const additionalData = {};

                try {
                    var response = await fetchData(url, params, additionalData);
                    console.log(response);
                    const states = response?.data?.BusinessServices?.[0]?.states || [];
                    const stateNames = states.map(state => state.state);
                    stateNames[0] = "TODO";
                    dispatch({
                        type: "UPDATE_BUSINESS_SERVICE_STATES", // Your actual action type
                        payload: stateNames,
                    });
                    console.log(stateNames);
                } catch (error) {
                    response = {
                        date:{}
                    }
                    response.data = pgrData;
                    const states = response?.data?.BusinessServices?.[0]?.states || [];
                    const stateNames = states.map(state => state.state);
                    stateNames[0] = "TODO";
                    dispatch({
                        type: "UPDATE_BUSINESS_SERVICE_STATES", // Your actual action type
                        payload: stateNames,
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
                                    <div onClick={() => handleOptionSelect('Option 2')}>Option 2</div>
                                    <div onClick={() => handleOptionSelect('Option 3')}>Option 3</div>
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

