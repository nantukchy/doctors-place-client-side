import React from 'react';
import {  Button, Card, ListGroup } from 'react-bootstrap';

const TravelInsurence = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center text-warning fw-bold fs-1">Secure Your Travel !</h1>
                <h3>Our Insurance Plan!</h3>
                <div className="row">
                    <div className="col-lg-7">
                        <p>The easiest way for us to experience the world is through travel. You may be heading out on holiday with loved ones, leaving the nest to further your education, or attending an important conference for work. Whatever the reason, we’re sure you’d like to enjoy hassle-free travel. Sadly, we all know that there’s a possibility for something to go horribly wrong. A passport could be stolen, luggage might be lost or misplaced, and a delay could lead to a missed transit flight. Dealing with any of these problems is demanding not only emotionally and physically, but also financially.</p>
                        <div className="row">
                            <div className="col-lg-6">
                            <Card style={{ width: '18rem' }} className="bg-warning">
  <Card.Header>International Travel Insurance</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cover For Accident And Sickness</ListGroup.Item>
    <ListGroup.Item>Baggage Loss Or Delay</ListGroup.Item>
                                        <ListGroup.Item>Automatic Extensions</ListGroup.Item>
                                        <Button variant="outline-light">Start Now</Button>
  </ListGroup>
</Card>
                            </div>
                            <div className="col-lg-6 mb-3 ">
                            <Card style={{ width: '18rem' }} className="bg-warning">
  <Card.Header>Domestic Travel Insurance</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Full Health Insurence coverage</ListGroup.Item>
    <ListGroup.Item>Fastes claim</ListGroup.Item>
                                        <ListGroup.Item>renewable extension</ListGroup.Item>
                                        <Button variant="outline-light">Start Now</Button>
  </ListGroup>
</Card>
                            </div>
                    </div>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid" src="https://i.ibb.co/B6Nw4Mr/preview.jpg" alt="" />
                    </div>
                </div>
            </div>
            
            </>
    );
};

export default TravelInsurence;