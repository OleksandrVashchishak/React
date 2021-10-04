const initialState = [];

const plans = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_STATE_PlAN':
            return action.payload;

        default:
            return state;

    }
};

export default plans;