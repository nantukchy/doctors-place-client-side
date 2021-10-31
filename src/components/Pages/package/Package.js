import React from 'react';
import { Button } from 'react-bootstrap';

const Package = () => {
    return (
        <>
        <div>
                <h1 className="text-center text-warning fw-bold fs-1">Our Cool Packages</h1>

            </div>
            <div className="team container">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt5">
                    <div className="col">
                        <div className="card ">
                            <img src="https://i.ibb.co/41GK0G3/package1.jpg" alt="" />
                            <div className="card-body">
                                <h3>Student Package</h3>
                                <h4>Price Start From $1000</h4>
                                <p>We have very special and echonmical tours offer for sutdent.</p>
                                <Button bg="light"variant="outline-warning">Add to Wishlist</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img className="img-cover" src="https://i.ibb.co/qFtMHH2/pack2.jpg" alt="" />
                            <div className="card-body">
                                <h3>Solo Package</h3>
                                <h4>Price Start From $1500</h4>
                                <p>This package decorated for thoose whose are realy love to travel alone.</p>
                                <Button bg="light"variant="outline-warning">Add to Wishlist</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://i.ibb.co/d49K9rD/3.jpg" alt="" />
                            <div className="card-body">
                                <h3>Family Package</h3>
                                <h4>Price Start From $2000</h4>
                                <p>Traveling with family is always delightfull, in this ocasion we offer family package</p>
                                <Button bg="light"variant="outline-warning">Add to Wishlist</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
};

export default Package;