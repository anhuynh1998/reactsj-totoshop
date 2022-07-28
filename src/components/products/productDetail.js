import React, { Component } from 'react';
import "./productDetails.scss"
import NavMenu from '../Menu/NavMenu';
import { getDetailProduct, getinCategories, get } from "../../../src/services/UserSevices"
import { withRouter } from 'react-router';
import Footer from '../Home/footer';
import Product from '../Home/Product';
import { connect } from 'react-redux';
import * as actions from "../../store/actions"
import { Zoom } from 'react-reveal';
import Modal from "react-modal";
import NavMobile from '../Menu/navMobile';






class ProductDetail extends Component {

    constructor ( props ) {
        super( props );
        this.state = {
            ProductDetail: {},
            relateProduct: [],
            quantity: '',
            isOpen: false,
            cartItems: null,
            ishowMobile: false,
            windowHeight: undefined,
            windowWidth: undefined

        }

    }

    async componentDidMount() {
        if ( this.props.match && this.props.match.params && this.props.match.params.id ) {
            let id = this.props.match.params.id;

            let res = await getDetailProduct( id );


            if ( res ) {
                this.setState( {
                    ProductDetail: res

                } )
            }


        }



        await this.getAllProductInCategory();
        this.handleResize();
        window.addEventListener( 'resize', this.handleResize )
    }
    handleResize = () => this.setState( {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    } );
    componentWillUnmount() {
        window.removeEventListener( 'resize', this.handleResize )
    }

    //   async  componentDidUpdate( prevProps, prevState, snapshot ) {
    //       let check= this.state.ProductDetail.id
    //       if ( check !== this.props.match.params.id ) {
    //           let id = this.props.match.params.id;

    //             let res = await getDetailProduct( id );
    //             if ( res ) {
    //                 this.setState( {
    //                     ProductDetail: res

    //                 } )
    //             }


    //       }



    //     }
    getAllProductInCategory = async () => {

        if ( this.state.ProductDetail && this.state.ProductDetail.category ) {
            let category = this.state.ProductDetail.category

            let res = await getinCategories( category )
            this.setState( {
                relateProduct: res
            } )



        }


    }
    openModal = ( cartItems ) => {
        this.setState( {

            isOpen: true

        } )
        this.props.addToCart( cartItems );
        console.log( cartItems )

    }
    closeModal = () => {
        this.setState( {
            isOpen: false
        } )
    }

    handelViewProductDetail = ( item ) => {
        window.scrollTo( {
            top: 0, left: 0, behavior: 'smooth',
            behavior: 'smooth',
        } );
        console.log( item )

        if ( item ) {
            this.setState( {
                ProductDetail: item
            }

            )
        }



    }
    handleChange = ( event ) => {
        this.setState( {
            quantity: event.target.value
        } )
        console.log( this.state.quantity )

    }
    addTocart = ( item ) => {
        console.log( ' check onclick ', item )

    }




    render() {
        let cartItems = this.props.cartItems

        let productDetails = this.state.ProductDetail
        let related = this.state.relateProduct


        return (
            <React.Fragment>

                {this.state.windowWidth <= 960 ? ( <div className='container-fluid '>

                    <div className='row'>
                        <div className='main-content'>


                            <div className=' content-right'>
                                <div className='nav-mobie'>
                                    <NavMobile />

                                </div>



                                <div className='content-details '>
                                    <div className='product-detail '>
                                        <div className=' col-4 prodct-avatar'>
                                            {productDetails &&
                                                <img src={productDetails.image} />}

                                        </div>
                                        <div className='col-8 product-details-pr'>

                                            <div className=' name-pr'>

                                                {productDetails &&
                                                    <h6 value={productDetails.title}>{productDetails.title}</h6>}

                                            </div>
                                            <div className=' price'>
                                                {productDetails &&
                                                    <span> ${productDetails.price} </span>}


                                            </div>
                                            {/* <div className=' quantity'>
                                            <label> Quantity:</label>
                                     
                                            <input onChange={( event ) => this.handleChange( event )}
                                                type="number" id="quantity" name="quantity" min="1" max="100" placeholder='0' />
                                           


                                        </div> */}
                                            <div className='btn-buy'>
                                                <a className='add-cart' onClick={() => this.props.addToCart( productDetails )}> Add To Cart</a>
                                                <a className='buy-now' onClick={() => this.openModal( productDetails )}>Buy Now</a>

                                            </div>
                                            <div className='shop'>
                                                <a className='shop-now'><i className="fas fa-store"></i> Available in store</a>
                                            </div>
                                            <div className='warranty'>
                                                <p><i className="fas fa-angle-double-right"></i> 90 DAY PRODUCT WARRANTY</p>
                                                <p><i className="fas fa-angle-double-right"></i> EXCHANGE WITHIN 30 DAYS</p>
                                                <p><i className="fas fa-angle-double-right"></i> HOTLINE SALE 0332701798</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className='description'>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rating</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Comment</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            {productDetails &&
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{productDetails.description}</div>}
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='related-product'>
                                    <div className=' title'>
                                        Related Product
                                    </div>
                                    <div className=' product-content'>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                {related && ( related || [] ).length > 0 && related.map( ( item, index ) => {
                                                    return (
                                                        <div key={index} className='product-item-related ' onClick={() => this.handelViewProductDetail( item )}>
                                                            <div className='image-product '>
                                                                <img src={item.image} />
                                                            </div>
                                                            <div className='price'>
                                                                <span>${item.price}</span>
                                                            </div>
                                                        </div>


                                                    )
                                                } )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <Footer />
                                <Modal isOpen={this.state.isOpen}
                                    className="Modal">
                                    <Zoom bottom>
                                        <button className="close-modal" onClick={this.closeModal}>
                                            x
                                        </button>
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='cart-oder'>
                                                    <div className='cart-oder-item-content col-6'>
                                                        <h6 className='notic-oder'>You have {( cartItems | [] ).length} products in your cart</h6>
                                                        {cartItems && ( cartItems || [] ).length > 0 && cartItems.map( ( item, index ) => {
                                                            return (
                                                                <div key={index} className='cart-oder-item'>
                                                                    <div className='image-product-oder'>
                                                                        <img className='img-product' src={item.image} />


                                                                    </div>
                                                                    <div className='infor-product-oder'>
                                                                        <div className='name-product'>
                                                                            <h6>{item.title}</h6>

                                                                        </div>
                                                                        <div className='update-item'>
                                                                            <span className=' price-product'>$ {item.price} x {item.count}</span>
                                                                            <span className='delete-item-cart' onClick={() => this.props.removeItemFromCart( item )}> Remove</span>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            )
                                                        } )}

                                                    </div>
                                                    <div className='check-out col-6'>
                                                        <div className=' check-out-containt '>
                                                            <div className='total-price'>
                                                                {cartItems && ( cartItems || [] ).length !== 0 && (
                                                                    <span className='total'>
                                                                        Total: $ {cartItems.reduce( ( a, c ) => a + c.price * c.count, 0 )
                                                                        }
                                                                    </span>

                                                                )}

                                                            </div>
                                                            <div className='form-check-out'>
                                                                <div class="email-c">
                                                                    <label for="formFileSm" class="form-label">Email:</label>
                                                                    <input class="form-control form-control-sm" id="formFileSm" type="email" />
                                                                </div>
                                                                <div class="name-c">
                                                                    <label for="formFileSm" class="form-label">Name:</label>
                                                                    <input class="form-control form-control-sm" id="formFileSm" type="text" />
                                                                </div>
                                                                <div class="Adress">
                                                                    <label for="formFileSm" class="form-label">Address:</label>
                                                                    <input class="form-control form-control-sm" id="formFileSm" type="text" />
                                                                </div>
                                                                <div class="Phone">
                                                                    <label for="formFileSm" class="form-label">Phone Numer:</label>
                                                                    <input class="form-control form-control-sm" id="formFileSm" type="text" />
                                                                </div>
                                                                <div className='btn-check-out'>
                                                                    <button class="btn btn-primary" type="submit">CheckOut</button>
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Zoom>

                                </Modal>



                            </div>
                        </div>
                    </div>

                </div> ) :
                    ( <div className='container-fluid '>

                        <div className='row'>
                            <div className='main-content'>
                                <div className='col-2 content-left'>
                                    <NavMenu />


                                </div>
                                <div className=' content-right col-10'>


                                    <div className='content-details container'>
                                        <div className='product-detail '>
                                            <div className=' col-4 prodct-avatar'>
                                                {productDetails &&
                                                    <img src={productDetails.image} />}

                                            </div>
                                            <div className='col-8 product-details-pr'>

                                                <div className=' name-pr'>

                                                    {productDetails &&
                                                        <h6 value={productDetails.title}>{productDetails.title}</h6>}

                                                </div>
                                                <div className=' price'>
                                                    {productDetails &&
                                                        <span> ${productDetails.price} </span>}


                                                </div>
                                                {/* <div className=' quantity'>
                                            <label> Quantity:</label>
                                     
                                            <input onChange={( event ) => this.handleChange( event )}
                                                type="number" id="quantity" name="quantity" min="1" max="100" placeholder='0' />
                                           


                                        </div> */}
                                                <div className='btn-buy'>
                                                    <a className='add-cart' onClick={() => this.props.addToCart( productDetails )}> Add To Cart</a>
                                                    <a className='buy-now' onClick={() => this.openModal( productDetails )}>Buy Now</a>

                                                </div>
                                                <div className='shop'>
                                                    <a className='shop-now'><i className="fas fa-store"></i> Available in store</a>
                                                </div>
                                                <div className='warranty'>
                                                    <p><i className="fas fa-angle-double-right"></i> 90 DAY PRODUCT WARRANTY</p>
                                                    <p><i className="fas fa-angle-double-right"></i> EXCHANGE WITHIN 30 DAYS</p>
                                                    <p><i className="fas fa-angle-double-right"></i> HOTLINE SALE 0332701798</p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='description'>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rating</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Comment</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                {productDetails &&
                                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{productDetails.description}</div>}
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='related-product'>
                                        <div className=' title'>
                                            Related Product
                                        </div>
                                        <div className='container product-content'>
                                            {related && ( related || [] ).length > 0 && related.map( ( item, index ) => {
                                                return (
                                                    <div key={index} className='product-item-related col-3' onClick={() => this.handelViewProductDetail( item )}>
                                                        <div className='image-product '>
                                                            <img src={item.image} />
                                                        </div>
                                                        <div className='price'>
                                                            <span>${item.price}</span>
                                                        </div>
                                                    </div>


                                                )
                                            } )}</div>


                                    </div>
                                    <Footer />
                                    <Modal isOpen={this.state.isOpen}
                                        className="Modal">
                                        <Zoom bottom>
                                            <button className="close-modal" onClick={this.closeModal}>
                                                x
                                            </button>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='cart-oder'>
                                                        <div className='cart-oder-item-content col-6'>
                                                            <h6 className='notic-oder'>You have {( cartItems || [] ).length} products in your cart</h6>
                                                            {cartItems && ( cartItems || [] ).length > 0 && cartItems.map( ( item, index ) => {
                                                                return (
                                                                    <div key={index} className='cart-oder-item'>
                                                                        <div className='image-product-oder'>
                                                                            <img className='img-product' src={item.image} />


                                                                        </div>
                                                                        <div className='infor-product-oder'>
                                                                            <div className='name-product'>
                                                                                <h6>{item.title}</h6>

                                                                            </div>
                                                                            <div className='update-item'>
                                                                                <span className=' price-product'>$ {item.price} x {item.count}</span>
                                                                                <span className='delete-item-cart' onClick={() => this.props.removeItemFromCart( item )}> Remove</span>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                )
                                                            } )}

                                                        </div>
                                                        <div className='check-out col-6'>
                                                            <div className=' check-out-containt '>
                                                                <div className='total-price'>
                                                                    {cartItems && ( cartItems || [] ).length !== 0 && (
                                                                        <span className='total'>
                                                                            Total: $ {cartItems.reduce( ( a, c ) => a + c.price * c.count, 0 )
                                                                            }
                                                                        </span>

                                                                    )}

                                                                </div>
                                                                <div className='form-check-out'>
                                                                    <div class="email-c">
                                                                        <label for="formFileSm" class="form-label">Email:</label>
                                                                        <input class="form-control form-control-sm" id="formFileSm" type="email" />
                                                                    </div>
                                                                    <div class="name-c">
                                                                        <label for="formFileSm" class="form-label">Name:</label>
                                                                        <input class="form-control form-control-sm" id="formFileSm" type="text" />
                                                                    </div>
                                                                    <div class="Adress">
                                                                        <label for="formFileSm" class="form-label">Address:</label>
                                                                        <input class="form-control form-control-sm" id="formFileSm" type="text" />
                                                                    </div>
                                                                    <div class="Phone">
                                                                        <label for="formFileSm" class="form-label">Phone Numer:</label>
                                                                        <input class="form-control form-control-sm" id="formFileSm" type="text" />
                                                                    </div>
                                                                    <div className='btn-check-out'>
                                                                        <button class="btn btn-primary" type="submit">CheckOut</button>
                                                                    </div>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Zoom>

                                    </Modal>



                                </div>
                            </div>
                        </div>

                    </div> )
                }
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        product: state.admin.arrProduct,
        cartItems: state.admin.arrCartItem


    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: ( cartItems ) => dispatch( actions.addToCart( cartItems ) ),
        removeItemFromCart: ( cartItems ) => dispatch( actions.removeItemFromCart( cartItems ) )

    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( ProductDetail ) );
