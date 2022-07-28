import actionTypes from '../actions/actionTypes';


const initialState = {
    arrCategory: [],
    arrProduct: [],
    arrCartItem: JSON.parse( localStorage.getItem( "cartItems" ||"[]") )

}

const adminReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        
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
        case actionTypes.FETCH_ALL_PRODUCT_SUCCESS:
            let  copyStateProduct = { ...state }
            copyStateProduct.arrProduct = action.data;

            return {
                ...copyStateProduct


            }
        case actionTypes.FETCH_ALL_PRODUCT_FAILS:
            return {
                ...state,

            }
        case actionTypes.ADD_TO_CART_SUCCESS:
            let CartItem = { ...state }
            CartItem.arrCartItem = action.data;

            return {
                ...CartItem


            }
        case actionTypes.ADD_TO_CART_FAILS:
            return {
                ...state,

            }
        case actionTypes.REMOVE_FROM_CART_SUCCESS:
            let CartItemRemove = { ...state }
            CartItemRemove.arrCartItem = action.data;

            return {
                ...CartItemRemove


            }
        case actionTypes.REMOVE_FROM_CART_FAILS:
            return {
                ...state,

            }
        default:
            return state;
    }
}

export default adminReducer;