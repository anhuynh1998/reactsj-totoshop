import React, { Component } from 'react';
import "./Product.scss"
import * as actions from "../../store/actions"
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Fade from 'react-reveal/Fade';

class Product extends Component {

    constructor(props) {
        super( props );
        this.state = {
            arrProduct :[]
        }
        
    }
    



    componentDidMount() {
        this.props.AllProduct()

        
    }
    componentDidUpdate( prevProps, prevState, snapshot ) {
        if ( prevProps.product !== this.props.product ) {
            let product = this.props.product
            this.setState(
                {
                    arrProduct: product,


                }
            )
        }


    }
    handelViewProductDetail = ( item ) => {
    
        this.props.history.push( `/products/${ item.id}` )
       
        
    }




    render() {
      let products= this.state.arrProduct
        return (
            
            <div className=' product-content'>
                <div className='title'>
                    <h2>NEW ARRIVALS</h2>
                </div>
                <div className='product-main row '>
                    {products && ( products || [] ).length > 0 && products.map( ( item, index ) => {
                        return (
                            <Fade top cascade key={index}>
                                <div key={index} className='product-item col-3 ' onClick={() => this.handelViewProductDetail( item )}>
                                    <div className='product-img '>
                                        <img src={item.image} />

                                    </div>
                                    <div className='product-price'>{item.price} $ </div>
                                </div>

                            </Fade>
                           
                           
                       )
                   })}
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.admin.arrProduct

    };
};

const mapDispatchToProps = dispatch => {
    return {
        AllProduct: ( data ) => dispatch( actions.fetAllProduct( data ) )

    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Product ) ) ;

