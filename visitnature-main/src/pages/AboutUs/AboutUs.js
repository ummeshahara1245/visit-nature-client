import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="">
            <div className="d-flex mt-5 container">
            <div className="w-50">
            <h1 className="text-start">HELLO.
                <br />
                OUR AGENCY HAS BEEN PRESENT
                <br />
                BEST IN THE MARKET</h1>
                <div className="d-lg-flex">
                <div className="m-5">
            <i class="fas fa-hand-holding-usd icon fa-3x fa-sm-1"></i>
        <h5>AFFORDABLE PRICE</h5>
        </div>
        <div className="m-5 small-device">
        <i class="fas fa-map fa-3x fa-sm-1"></i>
        <h5>BEST DESTINATION</h5>
        </div>
        <div className="m-5">
        <i class="fab fa-teamspeak fa-3x fa-sm-1"></i>
        <h5>PERSONAL SERVICE</h5>
        </div>
            </div>
            </div>
            
            <div className="w-50 h-100 mediaquery">
                <p className="fs-5">We will serve you the best travelling experience. We will give you all travelling service.Our staff will help you anytime you need. For our best service we are renowned. If you have any problem you can contact our customer care service. We will solve you problem. Happy journey.</p>
               
            </div>
            
        </div>
        <div className="center d-flex"> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/P5JnMJfa0HA" title="Tour with us" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>

        
        
        
    );
};

export default AboutUs;