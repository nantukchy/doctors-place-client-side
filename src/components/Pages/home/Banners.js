import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banners = () => {
    return (
        <>
             <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/R3qcC9z/banner.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-info fw-bold">goGo Tours Service</h1>
                        <p>"Your Satisfaction is Our Goal"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XYcV4Sh/banner31008x350.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-white fw-bold">goGo Tours Service</h1>
                        <p>"Your Satisfaction is Our Goal"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/YkHMSv8/banner21008x350.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-warning fw-bold">goGo Tours Service</h1>
                        <p>"Your Satisfaction is Our Goal"</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </>
    );
};

export default Banners;