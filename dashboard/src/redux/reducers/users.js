const initialState = [];

const editUser = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.payload;

        case 'ADD_NEW_USER':
            return [...state, action.payload];

        case 'EDIT_USER':
            return action.payload;

        default:
            return state;

    }
};

export default editUser;