import React, { Component } from 'react';
import "./footer.scss"
import Fade from 'react-reveal/Fade';

class Footer extends Component {
    render() {
        return (
            <div className=' footer-container col-10'>
                <Fade top cascade>
                    <div className='container'>
                        <div className='row'>
                            <div className='header-footer'>
                                <div className='content-le'>
                                    <div className='infor-left col-6'>
                                        <span className='t1'>ONLINE SHOPPING</span>
                                        <span className='p1'>033.270.1798</span>
                                        <span className='p2'>01900.633.501</span>
                                        <span className='m1'>huynhxuanan199@gmail.com</span>

                                    </div>
                                    <div className=' infor-right col-6'>
                                        <span className='t1'>HOTLINE COMMENTS</span>
                                        <span className='p1'>0908.18.12.89</span>
                                        <span className='m1'>cskh@toto.vn</span>
                                    </div>

                                </div>
                                <div className=' content-right'>
                                    <div className='infor col-4'>
                                        <h6> Information</h6>
                                        <ul>
                                            <li>Introduce</li>
                                            <li>Company contact</li>
                                            <li>Partner</li>
                                            <li>Recruit</li>
                                        </ul>

                                    </div>
                                    <div className='policy col-4'>
                                        <h6> Policy</h6>
                                        <ul>
                                            <li>Exchange policy</li>
                                            <li>Refund Policy</li>
                                            <li>Warranty Policy</li>
                                            <li>Warranty Policy</li>
                                        </ul>


                                    </div>
                                    <div className=' faq col-4'>
                                        <h6> FAQ</h6>
                                        <ul>
                                            <li>Payment and Shipping</li>
                                            <li>Size guide</li>
                                            <li>Check order information</li>
                                            <li>Frequently asked questions</li>
                                        </ul>


                                    </div>

                                </div>
                            </div>
                        </div>
                  </div>

                </Fade>
                
                <Fade top cascade>
                    <div className='footer-footer'>
                        <span>TOTO GROUP MANUFACTURING TRADING & SERVICE CO., LTD</span>
                        <span>Address: 304 - 306 Nguyen Trai, Ward 8, District 5, HCMC/ Phone: 0938803633/DKKD number: 41C8013053 issued on December 1, 2010, where District 3 People's Committee was issued</span>
                    </div>
               </Fade>
             
                
            </div>
        );
    }
}

export default Footer;
