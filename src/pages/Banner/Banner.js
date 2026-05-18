import React from 'react';
import image1 from "../../images/bali.png"
import image2 from "../../images/kuakata.png"
import image3 from "../../images/meeru.png"
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active carousel-size">
                        <div className="overlay"></div>
                        <img src={image3} className="d-block w-100" alt="Meeru Island" />
                        <div className="carousel-caption">
                            <h1 className="display-4 display-md-3 fw-bold">Explore the Blue Meeru</h1>
                            <p className="fs-6 fs-md-4">Experience the ultimate luxury in the heart of Maldives.</p>
                            <button className="btn btn-green btn-sm btn-md-lg mt-2">Book Now</button>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item carousel-size">
                        <div className="overlay"></div>
                        <img src={image2} className="d-block w-100" alt="Kuakata" />
                        {/* d-none d-md-block সরিয়ে দেওয়া হয়েছে */}
                        <div className="carousel-caption">
                            <h1 className="display-4 display-md-3 fw-bold">Daughter of Ocean: Kuakata</h1>
                            <p className="fs-6 fs-md-4">Witness the sunrise and sunset from the same beach.</p>
                            <button className="btn btn-green btn-sm btn-md-lg mt-2">Explore More</button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item carousel-size">
                        <div className="overlay"></div>
                        <img src={image1} className="d-block w-100" alt="Bali" />
                        {/* d-none d-md-block সরিয়ে দেওয়া হয়েছে */}
                        <div className="carousel-caption">
                            <h1 className="display-4 display-md-3 fw-bold">Magical Bali Adventure</h1>
                            <p className="fs-6 fs-md-4">Find peace and adventure in the tropical paradise of Bali.</p>
                            <button className="btn btn-green btn-sm btn-md-lg mt-2">Get Started</button>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;