const initialState = {
    edit: null
};

const edit = (state = initialState, action) => {
    if (action.type === 'SET_EDIT_TEXT') {
        return {
            ...state,
            edit: action.payload,
        };
    }
    return state;
};

export default edit;