import actionTypes from '../actions/actionTypes';

export const cartReducer = (
    state = { cartItems: JSON.parse( localStorage.getItem( "cartItems" ) || "[]" ) },
    action
) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_CART_SUCCESS:
            return { cartItems: action.data.cartItems };
       
        default:
            return state;
    }
};
