import axios from "../axios";
const getAllCategory = () => {
    return axios.get( `https://fakestoreapi.com/products/categories` )
}
const getAllProduct = () => {
    return axios.get( `https://fakestoreapi.com/products` )
}
const getDetailProduct = ( inputId ) => {
    return axios.get( `https://fakestoreapi.com/products/${ inputId }` );
}
const getinCategories = ( inputCategories ) => {
    return axios.get( `https://fakestoreapi.com/products/category/${inputCategories}?limit=4` );
}
const getAllProductinCategories = ( inputCategories ) => {
    return axios.get( `https://fakestoreapi.com/products/category/${ inputCategories }` );
}

export {
    getAllCategory
    , getAllProduct,
    getDetailProduct
    , getinCategories,
    getAllProductinCategories
}