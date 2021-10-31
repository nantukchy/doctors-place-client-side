import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './TopDestinations.css'

const TopDestinations = () => {
    return (
        <>
            <div className=" container bg-light mb-5 mt-5">
            <h2 className="text-center text-warning fw-bold fs-1">Top Destinations to Visit</h2>
            <h5>With a world full of fascinating destinations, choosing the perfect vacation spot can present a challenge. That's why U.S. News used expert opinions, reader votes and current trends – and evaluated sights, cultures, scenic beauty, food scenes and more – to compile this list of the world's best places to visit. Use these recommendations to craft your travel bucket list, and plan your trip below to help us determine next year's list with <span className="text-warning fw-bold fs-1">goGo Tours !</span></h5>
            <Row xs={1} md={2} className="g-4">
            
                <Col>
                    
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/ZJT8cz7/top-attractions-in-the-world-italy-rome-colosseum.jpg" />
        <Card.Body>
          <Card.Title>The Colosseum, Rome, Italy</Card.Title>
          <Card.Text>
          The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. It's been a bucket-list destination of travelers for generations. And it does not disappoint Set in the heart of the city, the Colosseum is an easy place to visit. Direct flights from around the world land in Rome daily, making it a destination you can visit in a if you choose this place
          </Card.Text>
        </Card.Body>
      </Card>
                </Col>
                <Col>
      <Card>
        <Card.Img variant="top" src="https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-france-eiffel-tower-lower-night.jpg" />
        <Card.Body>
          <Card.Title>Eiffel Tower, Paris, France</Card.Title>
          <Card.Text >
          The symbol of Paris and one of the most photographed structures in the world, a visit to the Eiffel Tower is a must for all travelers. Few landmarks inspire such a passion for travel as this single iron structure. Young travelers heading out on the  couples looking for a special getaway, artists looking to spur their creativity,all drawn to Paris. This is a city where history and culture collide and where travelers of all kinds can find the experience they're after.
          </Card.Text>
        </Card.Body>
      </Card>
                </Col>
                <Col>
      <Card className="">
        <Card.Img variant="top" src="https://i.ibb.co/yyb2rqq/top-attractions-in-the-world-china-great-wall.jpg" />
        <Card.Body>
          <Card.Title>Great Wall of China, China</Card.Title>
          <Card.Text>
          In a land of modern cities and towering skyscrapers, the Great Wall of China, built between the 14th and 17th centuries, is a stark contrast but a striking image that all visitors to China should see. A stroll along the top of the wall provides an incredible view of the structure snaking off into the distance. The wall stretches an astounding 21,196 kilometers, through some remote areas. Many travelers seeing the sights of China choose to visit the wall on easily organized tours from Beijing, a relatively short motorcoach ride away.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/Wv7Mzcw/top-attractions-in-the-world-peru-machu-picchu-overview.jpg" />
        <Card.Body>
          <Card.Title>Machu Picchu, Peru</Card.Title>
          <Card.Text>
          If you are planning to see only one attraction in South America, this is the place to come. The ancient Inca city of Machu Picchu is arguably the most impressive ruined city in the world. Much of the attraction comes from its location, high in the jungle-clad mountains of Peru. Set on a high plateau with soaring green mountains, the setting is surreal. The sheer  in what would have been impenetrable jungle, is, in itself, impressive. Visitor numbers are now limited to a maximum per day, so the experience has been greatly enhanced.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>

            </div>
            
            </>
    );
};

export default TopDestinations;