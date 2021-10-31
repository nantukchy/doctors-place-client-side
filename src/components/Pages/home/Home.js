import React from 'react';
import Banners from './Banners';
import Services from './Services';
import TopDestinations from './TopDestinations';
import TravelInsurence from './TravelInsurence';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Services></Services>
            <TopDestinations></TopDestinations>
            <TravelInsurence></TravelInsurence>
        
        </div>
    );
};

export default Home;