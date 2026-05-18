import React from 'react';
import { useHistory } from 'react-router-dom'; // useNavigate এর বদলে useHistory
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, photoUrl, duration, description } = service;
    const history = useHistory(); // history ইনিশিয়াল করা

    const handleBooking = () => {
        // navigate এর বদলে history.push ব্যবহার করুন
        history.push(`/booking/${_id}`);
    };

    return (
        <div className="col">
            <div className="card h-100 tour-card border-0 shadow-sm">
                <div className="position-relative overflow-hidden">
                    <img src={photoUrl} className="card-img-top tour-img" alt={name} />
                    <div className="tour-duration">
                        <i className="far fa-clock me-1"></i> {duration}
                    </div>
                    <div className="tour-price-tag">৳{price}</div>
                </div>

                <div className="card-body p-4 text-start">
                    <h5 className="fw-bold text-dark mb-2">{name}</h5>
                    <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
                        {description?.slice(0, 80)}...
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="rating text-warning small">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span className="text-muted ms-1">(4.8)</span>
                        </div>

                        {/* হ্যান্ডেল বুকিং ফাংশন কল করা হয়েছে */}
                        <button onClick={handleBooking} className="btn btn-success btn-sm px-3 rounded-pill fw-bold">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;