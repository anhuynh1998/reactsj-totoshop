import React, { Component, Fragment } from 'react';
import "./navMoblie.scss"
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Modal from "react-modal";
import { Zoom } from 'react-reveal';
import { getAllCategory } from "../../services/UserSevices"
import * as actions from "../../store/actions"
import Fade from 'react-reveal/Fade';

class NavMobile extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            arrCategory: [],
            carItem: null,
            isOpen: false

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
        console.log( 'chekc ca', categories )

        let cartItems = this.props.cartItems
        return (
            <React.Fragment>
                <div className='nav-bar-mobile'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-mobile-custtom">
                        <div className="container-fluid ">
                            <a className="navbar-brand" href="/">TOTOSHOP</a>
                            <div className='content-right-nav'>
                                <div className='cart' onClick={() => this.openModal( cartItems )}><span><i className="fas fa-shopping-bag"> </i> {( cartItems || [] ).length === 0 ? ( <span className='total-item'>0</span> )
                                    : ( <span className='total-item'> {( cartItems || [] ).length}</span> )}  </span></div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>




                            <div className="collapse navbar-collapse" id="navbarNav">
                                <Fade left>
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            {

                                                categories && (categories||[]).length > 0 && categories.map( ( item, index ) => {
                                                    return (
                                                        <a key={index} className="nav-link" onClick={() => this.handelViewProductIncategory( item )}>{item}</a>

                                                    )
                                                } )
                                            }

                                        </li>


                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </nav >


                </div >
                <div className=' modal '>
                    <Modal
                        isOpen={this.state.isOpen}
                        onRequestClose={this.closeModal}>
                        <Zoom bottom>
                            <button className="close-modal" onClick={this.closeModal}>
                                x
                            </button>
                            <div className='container'>
                                <div className='row'>
                                    <div className='cart-oder'>
                                        <div className='cart-oder-item-content '>
                                            <h6 className='notic-oder'>You have products in your cart</h6>
                                            {cartItems && cartItems.map( ( item, index ) => {
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
                                        <div className='check-out '>
                                            <div className=' check-out-containt '>
                                                <div className='total-price'>
                                                    {cartItems && (cartItems || []).length !== 0 && (
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

            </React.Fragment>


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

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( NavMobile ) );
