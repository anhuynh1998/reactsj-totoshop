
import React, { Component } from 'react';
import NavMenu from '../Menu/NavMenu';
import Footer from "../Home/footer"
import { getAllProductinCategories } from "../../services/UserSevices"
import "./ProductinCategory.scss"
import NavMobile from '../Menu/navMobile';

class ProductinCategory extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            arrProductIncategory: [],
            ishowMobile: false,
            windowHeight: undefined,
            windowWidth: undefined
        }
    }



    async componentDidMount() {
        this.handleResize();
        window.addEventListener( 'resize', this.handleResize )



        if ( this.props.match && this.props.match.params && this.props.match.params.name ) {
            let category = this.props.match.params.name;

            let res = await getAllProductinCategories( category )


            if ( res ) {
                this.setState( {
                    arrProductIncategory: res

                } )
            }


        }

    }
    handleResize = () => this.setState( {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    } );
    componentWillUnmount() {
        window.removeEventListener( 'resize', this.handleResize )
    }
    async componentDidUpdate( prevProps ) {
        if ( this.props.location !== prevProps.location ) {
            let category = this.props.match.params.name;

            let res = await getAllProductinCategories( category )


            if ( res ) {
                this.setState( {
                    arrProductIncategory: res

                } )
            }


        }

    }
    handelViewProductDetail = ( item ) => {

        this.props.history.push( `/products/${ item.id }` )


    }


    render() {

        let product = this.state.arrProductIncategory;
        let category = this.props.match.params.name;

        return (
            <>
                {this.state.windowWidth <= 960 ? ( <div className='container-fluid '>
                    <div className='row'>
                        <div className='main-content'>

                            <div className='content-right '>
                                <div className='nav-mobie'>
                                    <NavMobile />

                                </div>
                                <div className='product-content-incate '>
                                    <div className='row'>
                                        <h6 className='name-category'>{category}</h6>
                                        {
                                            product && (product||[]).length > 0 && product.map( ( item, index ) => {
                                                return (
                                                    <div key={index} className='product-item col-3' onClick={() => this.handelViewProductDetail( item )} >
                                                        <div className='product-image'>
                                                            <img src={item.image} />

                                                        </div>
                                                        <div className='product-price'>
                                                            <span> ${item.price}</span>

                                                        </div>
                                                    </div>

                                                )
                                            } )
                                        }

                                    </div>
                                </div>
                                <Footer />

                            </div>
                        </div>
                    </div>

                </div> ) : ( <div className='container-fluid '>
                    <div className='row'>
                        <div className='main-content'>
                            <div className='col-2 content-left'>
                                <NavMenu />


                            </div>
                            <div className='content-right col-10'>
                                <div className='product-content-incate container'>
                                    <div className='row'>
                                        <h6 className='name-category'>{category}</h6>
                                        {
                                                product && ( product || [] ).length > 0 && product.map( ( item, index ) => {
                                                return (
                                                    <div key={index} className='product-item col-3' onClick={() => this.handelViewProductDetail( item )} >
                                                        <div className='product-image'>
                                                            <img src={item.image} />

                                                        </div>
                                                        <div className='product-price'>
                                                            <span> ${item.price}</span>

                                                        </div>
                                                    </div>

                                                )
                                            } )
                                        }

                                    </div>
                                </div>
                                <Footer />

                            </div>
                        </div >
                    </div >

                </div > )}
            </>

        );
    }
}

export default ProductinCategory;
