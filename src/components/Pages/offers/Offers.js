import React from 'react';
import { Card } from 'react-bootstrap';

const Offers = () => {
    return (
        <div className="offer container">
            <div className="row bg-light">
                <div className="col-lg-6">
                <Card className="bg-dark text-white">
  <Card.Img className="img-fluid" src="https://i.ibb.co/HNFvXP4/Travel-Insta.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className="text-light fw-bold fs-1">Summer Offer</Card.Title>
    <Card.Text className="text-light fw-bold fs-5">Offer will Start from March 2022</Card.Text>
  </Card.ImgOverlay>
</Card>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center mt-1">Our Exciting <br/>Summer Offer will Provide you</h2>
                        </div>
                            <h2 className="text-info mt-1">DESTINATIONS:</h2>
                          <h3>London 10Days | Peru | Glasgow (2N) | Rome (2N) | Milan (2N)</h3>
                        <div className="col-lg-12 col-6">
                            <h3 className="text-info">Book Now Pay Later</h3>
                            <h4>Offer price Start from $ 1500</h4>
                            <p>This offer includes all types of Food, Hotel, Bus etc</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Offers;