import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-section py-12 bg-white">
            <div className="container px-4 mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2">Who We Are</h2>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                        HELLO. WE ARE <span className="text-green-500">VISIT NATURE</span> <br />
                        THE BEST IN THE MARKET
                    </h1>
                </div>

                <div className="flex flex-wrap items-center -mx-4">
                    {/* Left Side: Features */}
                    <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="feature-card p-6 bg-gray-50 rounded-2xl border-b-4 border-green-500 shadow-sm hover:shadow-md transition">
                                <i className="fas fa-hand-holding-usd text-4xl text-green-500 mb-4"></i>
                                <h4 className="text-xl font-bold mb-2 text-gray-800">Affordable Price</h4>
                                <p className="text-gray-600 text-sm">Experience premium travel without breaking the bank. We offer the best value for money.</p>
                            </div>

                            <div className="feature-card p-6 bg-gray-50 rounded-2xl border-b-4 border-yellow-500 shadow-sm hover:shadow-md transition">
                                <i className="fas fa-map-marked-alt text-4xl text-yellow-500 mb-4"></i>
                                <h4 className="text-xl font-bold mb-2 text-gray-800">Best Destination</h4>
                                <p className="text-gray-600 text-sm">Carefully curated spots that offer breathtaking views and authentic experiences.</p>
                            </div>

                            <div className="feature-card p-6 bg-gray-50 rounded-2xl border-b-4 border-blue-500 shadow-sm hover:shadow-md transition">
                                <i className="fab fa-teamspeak text-4xl text-blue-500 mb-4"></i>
                                <h4 className="text-xl font-bold mb-2 text-gray-800">Personal Service</h4>
                                <p className="text-gray-600 text-sm">24/7 dedicated support and personalized guides for your unique journey.</p>
                            </div>

                            <div className="feature-card p-6 bg-gray-50 rounded-2xl border-b-4 border-red-500 shadow-sm hover:shadow-md transition">
                                <i className="fas fa-shield-alt text-4xl text-red-500 mb-4"></i>
                                <h4 className="text-xl font-bold mb-2 text-gray-800">Safe Traveling</h4>
                                <p className="text-gray-600 text-sm">Your safety is our priority. We ensure all protocols are met for a worry-free trip.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Description & Image */}
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="relative pl-0 lg:pl-10">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                                "We believe that travel is more than just visiting places; it's about creating memories that last a lifetime. Our staff is dedicated to ensuring your comfort at every step."
                            </p>
                            <p className="text-gray-600 mb-8">
                                Renowned for our excellence, we solve every travel hurdle you might face. From customer care to on-ground support, we are with you. Happy Journey starts here!
                            </p>

                            {/* Video Section */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full h-64 md:h-80"
                                        src="https://www.youtube.com/embed/P5JnMJfa0HA"
                                        title="Tour with us"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;