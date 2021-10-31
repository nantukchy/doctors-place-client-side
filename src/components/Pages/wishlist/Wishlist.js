import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';

const Wishlist = () => {

    const { wishId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://frightful-witch-00401.herokuapp.com/services/${wishId}`)
            .then(res => res.json())
            .then(data => setService(data));
    },[])

    return (
        <>
            <div className="wish-list container">
            <div>
            <h1 className="text-center text-warning fw-bold fs-1">Please Review <br/>Your Order before proceed !!!</h1>
            
            <h3>{service.name}</h3>
                    <img className="img-fluid" src={service.img} alt="" />
                    <p>{service.description}</p>
                    <h5>Your Package tracking number:{wishId}</h5>
                    <Button bg="light"variant="warning">Book Now</Button>
            </div>
            </div>
            
            </>
    );
};

export default Wishlist;