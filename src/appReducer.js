const initialState = {
    cards: [],
    businessServiceStates: ["To Do", "In Progress", "Reopened", "On Hold", "To Review", "In Review", "Invalid", "Dropped", "Signed Off"], // Corrected the typo 'bussinesServiceStates' to 'businessServiceStates'
    // other initial state properties
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CARDS":
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };
        case "UPDATE_BUSINESS_SERVICE_STATES": // Use your actual action type here
            return {
                ...state,
                businessServiceStates: action.payload,
            };
        case "NEW_CARDS":
            return {
                ...state,
                cards: action.payload?.data?.ProcessInstances,
            };
        // other cases
        default:
            return state;
    }
};

export default appReducer;
