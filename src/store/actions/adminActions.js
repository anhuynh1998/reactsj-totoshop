
import actionTypes from './actionTypes';
import { getAllCategory, getAllProduct } from '../../services/UserSevices';
import { dispatch } from '../../redux';
import { toast } from "react-toastify";



export const fetAllCategory = () => {
    return async ( dispatch, getSate ) => {
        try {
            let res = await getAllCategory();
            console.log( 'check data', res )
            if ( res ) {


                dispatch( fetchALLCategorySuccess( res ) );
            }
            else {
                dispatch( fetchALLFails() );

            }



        } catch ( e ) {
            dispatch( fetchALLFails() );

            console.log( ' fetchALLFails', e )

        }

    }

};

export const fetchALLCategorySuccess = ( data ) => ( {



    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    data: data

} )
export const fetchALLFails = () => ( {
    type: actionTypes.FETCH_ALL_CATEGORIES_FAILS
} )
//FETCH ALL PRODUCT 
export const fetAllProduct = () => {
    return async ( dispatch, getSate ) => {
        try {
            let res = await getAllProduct();

            if ( res ) {


                dispatch( fetchALLProductSuccess( res ) );
            }
            else {
                dispatch( fetchALLFails() );

            }



        } catch ( e ) {
            dispatch( fetchALLProductFails() );

            console.log( ' fetchALLProductFails', e )

        }

    }

};

export const fetchALLProductSuccess = ( data ) => ( {



    type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
    data: data

} )
export const fetchALLProductFails = () => ( {
    type: actionTypes.FETCH_ALL_PRODUCT_FAILS
} )

export const addToCart = ( product ) => {
    return ( dispatch, getState ) => {
        try {



            const arr = getState().admin.arrCartItem || []
            const cartItems = arr?.slice()
            let alreadyExists = false;
            cartItems.forEach( ( x ) => {
                if ( x.id === product.id ) {
                    alreadyExists = true;
                    x.count++;
                }
            } );
            if ( !alreadyExists ) {
                cartItems.push( { ...product, count: 1 } )


            }

            dispatch( addTocCartSuccess( cartItems ) );
            toast.success( 'Add To Cart Succsess!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            } );

            localStorage.setItem( "cartItems", JSON.stringify( cartItems ) );

        } catch ( e ) {
            console.log( e )
            dispatch( addToCartFails() )

        }
    }



}
export const addTocCartSuccess = ( cartItems ) => ( {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    data: cartItems

} )
export const addToCartFails = () => ( {
    type: actionTypes.ADD_TO_CART_FAILS
} )

export const removeItemFromCart = ( product ) => {
    return ( dispatch, getSate ) => {
        try {
            const arr = getSate().admin.arrCartItem || []
            const cartItems = arr?.slice()
                .filter( ( x ) => x.id !== product.id );
            dispatch( DeletItemCartSuccess( cartItems ) )

            toast.success( 'success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            } );

            localStorage.setItem( "cartItems", JSON.stringify( cartItems ) );

        } catch ( e ) {
            console.log( e )
            DeletItemCartFails();

        }
    }



}


export const DeletItemCartSuccess = ( cartItems ) => ( {
    type: actionTypes.REMOVE_FROM_CART_SUCCESS,
    data: cartItems

} )
export const DeletItemCartFails = () => ( {
    type: actionTypes.REMOVE_FROM_CART_FAILS
} )


