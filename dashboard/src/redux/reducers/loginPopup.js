const initialState = {
    open: true,
    loginForm: true
};

const loginPopup = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_LOGIN_POPUP':
            return {
                ...state,
                open: action.payload,
            };
        case 'CHANGE_FORM':
            return {
                ...state,
                loginForm: action.payload,
            };

        default:
            return state;

    }
};

export default loginPopup;