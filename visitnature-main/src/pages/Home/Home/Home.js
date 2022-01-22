import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import './Home.css';
import Banner from '../../Banner/Banner';
import Testimonials from '../../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services />
            <Gallery />
            <br />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;