import React, { Component, useEffect } from 'react';
import "./NavMenu.scss"
import { getAllCategory } from "../../services/UserSevices"
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Modal from "react-modal";
import { Zoom } from 'react-reveal';
import * as actions from "../../store/actions"




class NavMenu extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            arrCategory: [],
            cartItems: null,
            isOpen: false,

        }

    }



    async componentDidMount() {
        await this.getAllCategory()



    }
    getAllCategory = async () => {
        let respone = await getAllCategory();
        if ( respone ) {
            this.setState( {
                arrCategory: respone

            } )
        }



    }
    handelViewProductIncategory = ( item ) => {
        this.props.history.push( `/products/category/${ item }` )



    }
    openModal = ( cartItems ) => {
        this.setState( {

            isOpen: true
        } )

    }
    closeModal = () => {
        this.setState( {
            isOpen: false
        } )

    }





    render() {

        let categories = this.state.arrCategory
        let cartItems = this.props.cartItems



        return (
            <div className="nav-contain">
                <div className='logo'>
                    <a href='/'>
                        <img src="https://img.cdn.vncdn.io/nvn/ncdn/store/7136/logo_1654678632_z3476822435870_f4b9e00e50611b2a32876556b0d95082.jpg" />
                    </a>

                </div>
                <div className='nav-menu-item'>
                    <span><i className="fas fa-user"> </i></span>
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-heart"></i></span>

                    <div className='cart' onClick={() => this.openModal( cartItems )}><span><i className="fas fa-shopping-bag"> </i> {( cartItems || [] ).length === 0 ? ( <span className='total-item'>0</span> )
                        : ( <span className='total-item'> {( cartItems || [] ).length}</span> )}  </span></div>

                </div>
                <div className='menu'>
                    <nav className="nav flex-column">
                        {

                            categories && ( categories || [] ).length > 0 && categories.map( ( item, index ) => {
                                return (
                                    <a key={index} className="nav-link" onClick={() => this.handelViewProductIncategory( item )}>{item}</a>

                                )
                            } )
                        }


                        {/* {categories && categories.map(( item, index ) => {
                            return (
                                <a key={index} className="nav-link" href="/#">{ item}</a>
                           )
                        })} */}




                    </nav>

                </div>
                <div className='phone'>
                    <i className="fas fa-phone-volume"></i>
                    <span>0332701798</span>

                </div>
                <div className=' social'>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-twitter"></i>

                </div>

                <div className=' modal '>
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
                                                    {cartItems && cartItems.length !== 0 && (
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
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.admin.arrCartItem

    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeItemFromCart: ( cartItems ) => dispatch( actions.removeItemFromCart( cartItems ) )


    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( NavMenu ) );

