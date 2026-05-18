import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // আপনার লোকাল সার্ভার থেকে ডাটা নিয়ে আসা
        fetch('https://visit-nature-server.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log("Error loading services:", err));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-5 fw-bold text-success">Our Most Popular Services</h2>

            <div className="row g-4">
                {services.map(service => (
                    <div key={service._id} className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                            <img
                                src={service.photoUrl}
                                className="card-img-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                                alt={service.name}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x220?text=Nature+View'; }}
                            />
                            <div className="card-body p-4">
                                <h4 className="card-title fw-bold">{service.name}</h4>
                                <p className="text-muted small mb-3">
                                    <i className="far fa-clock me-1"></i> {service.duration}
                                </p>
                                <p className="card-text text-secondary">
                                    {service.description.slice(0, 100)}...
                                </p>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <h5 className="text-success fw-bold mb-0">৳{service.price}</h5>
                                    <Link to={`/booking/${service._id}`}>
                                        <button className="btn btn-outline-success rounded-pill px-4">
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;