import React from 'react';
import image1 from "../../images/bali.png"
import image2 from "../../images/kuakata.png"
import image3 from "../../images/meeru.png"
import './Banner.css'
const Banner = () => {
    return (
        <div className="">
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active carousel-size">
                <img src={image3} class="d-block w-100 " alt="..."></img>
                </div>
                <div class="carousel-item carousel-size">
                <img src={image2} class="d-block w-100 " alt="..."></img>
                </div>
                <div class="carousel-item carousel-size">
                <img src={image1} class="d-block w-100 " alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Banner;