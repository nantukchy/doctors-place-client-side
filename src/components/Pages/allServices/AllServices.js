import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllServices = ({ service }) => {
    const {_id, img, name, price, description } = service;
    return (

        
        <div className="service bg-warning pb-3">
            <img className="img-fluid" src={img} alt="" />
        <h2 className="ms-1">{name}</h2>
        <h5 className="text-end me-1">Price range start from $ {price}</h5>
            <p className="px-3 ">{description.slice(0, 200)}...</p>
            <Link to={`/wishlist/${_id}`}>
                <Button className="btn btn-danger">Add to WishList</Button>
            </Link>
        
    </div>
    );
};

export default AllServices;