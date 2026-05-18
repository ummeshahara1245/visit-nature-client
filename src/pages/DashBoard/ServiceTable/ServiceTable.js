import React from 'react';

const ServiceTable = ({ service, handleDeleteService }) => {
    // ডাটা ডিস্ট্রাকচারিং (নিশ্চিত করুন service অবজেক্টটি ঠিক আছে)
    if (!service) {
        return null; // যদি service ডাটা না থাকে তবে কিছু রেন্ডার করবে না
    }

    const { _id, name, price, photoUrl } = service;

    return (
        <div className="card h-100 shadow-sm border-0">
            <img
                src={photoUrl}
                className="card-img-top"
                alt={name}
                style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body p-3 text-center d-flex flex-column">
                <h6 className="card-title fw-bold mb-1">{name}</h6>
                <p className="text-success small mb-3">{price} BDT</p>

                <div className="mt-auto">
                    <button
                        onClick={() => handleDeleteService(_id)}
                        className="btn btn-danger btn-sm w-100"
                    >
                        <i className="fas fa-trash-alt me-1"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceTable;