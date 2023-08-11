const initialState = {
    cards: [],
    // other initial state properties
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CARDS":
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };
        // other cases
        default:
            return state;
    }
};

export default appReducer;
