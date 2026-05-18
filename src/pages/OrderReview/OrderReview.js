import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Booking from '../Booking/Booking';

const OrderReview = () => {
    const [service, setService] = useState({}); // 初期 মান হিসেবে একটি খালি অবজেক্ট দিন
    const { id } = useParams();

    useEffect(() => {
        const url = `https://visit-nature-server.onrender.com/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.log("Error fetching service:", err));
    }, [id]); // dependency array-তে id যোগ করা ভালো

    // ডাটা লোড হওয়ার আগে একটি সেফটি চেক
    if (!service?.name) {
        return <div className="text-center mt-20">Loading Service Details...</div>;
    }

    return (
        <div className="container mt-5 mb-5">
            <h4 className="text-center mb-4">
                You are going to <span className="text-green-600">BOOKING</span> this service!!!
            </h4>

            <div className="flex flex-col md:flex-row justify-center items-start gap-10">
                {/* সার্ভিস কার্ড */}
                <div className="text-center bg-green-600 hover:bg-green-700 transition duration-500 rounded text-white pb-5 overflow-hidden shadow-xl max-w-md">
                    {/* সংশোধন: service?.data.photoUrl এর বদলে service?.photoUrl */}
                    <img className="w-full h-80 object-cover mb-3" src={service?.photoUrl} alt={service?.name} />
                    <div className="px-4">
                        <h4 className="text-2xl font-bold">{service?.name}</h4>
                        <h5 className="my-2">Service Duration: {service?.duration}</h5>
                        <h6 className="text-xl font-semibold">Price: {service?.price} BDT</h6>
                        <p className="mt-3 text-sm opacity-90">{service?.description}</p>
                    </div>
                </div>

                {/* বুকিং ফরম */}
                <div className="bg-white p-5 rounded shadow-lg border">
                    <Booking service={service} />
                </div>
            </div>
        </div>
    );
}

export default OrderReview;