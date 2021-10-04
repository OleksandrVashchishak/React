const initialState = [];



const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DIALOGS': return action.payload;

        case 'SEND_MESSAGE': return action.payload;

        default:
            return state;

    }
};


export default dialogs;