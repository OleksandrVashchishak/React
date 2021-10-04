const initialState = {
    realtyItems: []
};

const realty = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REALTY_ITEMS':
            return {
                ...state,
                realtyItems: [...state.realtyItems, action.payload],
            };
        case 'EDIT_REALTY_ITEMS':
            return {
                ...state,
                realtyItems: action.payload,
            };
        case 'REMOVE_REALTY_ITEMS':
            return {
                ...state,
                realtyItems: action.payload,
            };
        case 'UPDATE_STATE_REALTY':
            return {
                ...state,
                realtyItems: action.payload,
            };

        default:
            return state;

    }
};

export default realty;