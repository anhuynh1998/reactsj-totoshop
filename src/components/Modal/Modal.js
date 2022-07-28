import React, { Component } from 'react';
import "./Modal.scss"
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Modal from "react-modal";
import { Zoom } from 'react-reveal';
import * as actions from "../../store/actions"

class Modals extends Component {
    constructor(props) {
        super( props );
        this.state = {
            isOpen: false,
            
       }
        
    }
    
    render() {
        let cartItems = this.props.cartItems;
        return (
           
            
            <div className=' modal '>
                <Modal className="Modal"
                    isOpen=""


                   
                    onRequestClose={this.closeModal}>
                    <Zoom bottom>
                        <button className="close-modal" onClick={this.closeModal}>
                            x
                        </button>
                        <div className='container'>
                            <div className='row'>
                                <div className='cart-oder'>
                                    <div className='cart-oder-item-content col-6'>
                                        <h6 className='notic-oder'>You have {cartItems.length} products in your cart</h6>
                                        {cartItems && (cartItems||[]).length > 0 && cartItems.map( ( item, index ) => {
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
                                                {cartItems && (cartItems||[]).length !== 0 && (
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

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Modals ) );
