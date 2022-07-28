import React, { Component } from 'react';
import './HomePage.scss'
import NavMenu from '../Menu/NavMenu';
import Product from './Product';
import Footer from "./footer"
import Slider from './slider';
import NavMobile from '../Menu/navMobile';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';

class HomePage extends Component {

    constructor ( props ) {
        super( props );
        this.state = {
            ishowMobile: false,
            windowHeight: undefined,
            windowWidth: undefined
        }

    }
    handleResize = () => this.setState( {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    } );

    componentDidMount() {
        this.handleResize();
        window.addEventListener( 'resize', this.handleResize )
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.handleResize )
    }



    render() {
        return (
            <React.Fragment>
                {
                    this.state.windowWidth >= 980 ? ( <div className='container-fluid '>
                        <div className='row'>
                            <div className='main-content'>
                                <div className='col-2 content-left'>
                                    <NavMenu />



                                </div>
                                <div className=' content-right col-10'>
                                    <Slider />

                                    <Product />
                                    <Footer />

                                </div>
                            </div>
                        </div>

                    </div> ) : ( <div className='container-fluid '>
                        <div className='row'>
                            <div className='nav-mobie'>
                                <NavMobile />

                            </div>

                            <div className=' content-right '>
                                <Slider />

                                <Product />
                                <Footer />

                            </div>
                        </div>
                    </div>

                    )
                }


            </React.Fragment>

        );
    }
}

export default HomePage;
