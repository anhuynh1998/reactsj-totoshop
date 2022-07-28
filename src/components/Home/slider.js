import React, { Component } from 'react';
import "./slider.scss"
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';

class Slider extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='slider-content'>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://img.cdn.vncdn.io/nvn/ncdn/store/7136/bn/1_SLIDE_2_1_.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://res.cloudinary.com/http-antubeone-blogspot-com/image/upload/v1658410270/Tha__ng_5_Slide_3_hsbh0l.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://res.cloudinary.com/http-antubeone-blogspot-com/image/upload/v1658410271/Tha__ng_5_Slide_1_ohtwnx.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>


                </div>
                <Fade top>
                    <div className='image-banner'>
                        <div className='col-6 banner-left'>
                            <img src='https://res.cloudinary.com/http-antubeone-blogspot-com/image/upload/v1658410927/Tha__ng_5_Banner_do__i__Nam__ijf5mg.jpg' />


                        </div>
                        <div className='col-6 banner-right'>
                            <img src='https://res.cloudinary.com/http-antubeone-blogspot-com/image/upload/v1658410928/Tha__ng_5_Banner_do__i__Nu______vyd5oi.jpg' />

                        </div>

                    </div>

                </Fade>
              

            </React.Fragment>
          
        );
    }
}

export default Slider;
