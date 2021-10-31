import React, { useEffect, useState } from 'react';
import AllServices from '../allServices/AllServices';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frightful-witch-00401.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])

    return (
        <>
            <div className="service">
                <h1 className="text-center text-warning fw-bold fs-1">Best Services</h1>
                <h5 className=" text-center">Whether it's a corporate tour, romantic delight, adventurous junkies or just a short Break , we have ample of tour choices to suit the most of your taste, requirement and budget. So Hurry up and book a Holiday with <span className="text-warning fw-bold fs-1">goGo Tours !</span></h5>
                        <div className="service-container m-3">
                            {
                                services.map(service => <AllServices key={service.id}
                                service={service}></AllServices>)
                            }
                        </div>
             
            </div>
        
            </>
    );
};

export default Services;