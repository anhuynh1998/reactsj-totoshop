import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
   
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            let copyState = { ...state }
            copyState.arrCategory = action.data;

            return {
                ...copyState


            }
        case actionTypes.FETCH_ALL_CATEGORIES_FAILS:
            return {
                ...state,
              
            }
        default:
            return state;
    }
}

export default appReducer;