import React, { useState, useEffect } from 'react';
import ServiceTable from '../ServiceTable/ServiceTable';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(6); // শুরুতে ৬টি নিশ্চিত করুন

    useEffect(() => {
        fetch('https://visit-nature-server.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error("Fetch Error:", err));
    }, []);

    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`https://visit-nature-server.onrender.com/services/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        setServices(services.filter(s => s._id !== id));
                    }
                });
        }
    };

    return (
        <div className="container-fluid py-5 bg-light" style={{ minHeight: '100vh' }}>
            <div className="container">
                <h2 className="text-center mb-5 fw-bold text-success">Manage Services</h2>

                {/* row-cols-lg-4 নিশ্চিত করবে এক লাইনে ৪টি কার্ড */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        services.slice(0, visible).map(service => (
                            <div className="col" key={service._id}>
                                <ServiceTable
                                    service={service}
                                    handleDeleteService={handleDeleteService}
                                />
                            </div>
                        ))
                    }
                </div>

                {/* See More বাটন লজিক */}
                {visible < services.length && (
                    <div className="text-center mt-5">
                        <button
                            onClick={() => setVisible(prev => prev + 3)}
                            className="btn btn-success px-5 py-2 rounded-pill fw-bold shadow"
                        >
                            See More Services <i className="fas fa-arrow-down ms-2"></i>
                        </button>
                    </div>
                )}

                {visible >= services.length && services.length > 0 && (
                    <p className="text-center text-muted mt-5 italic">All packages are displayed.</p>
                )}
            </div>
        </div>
    );
};

export default AllServices;