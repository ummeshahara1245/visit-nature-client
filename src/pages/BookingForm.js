import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const BookingForm = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({});

    // সার্ভিস ডিটেইলস লোড করা
    useEffect(() => {
        fetch(`https://visit-nature-server.onrender.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.log("Service Load Error:", err));
    }, [serviceId]);

    const handleConfirmBooking = (e) => {
        e.preventDefault();

        // ফর্ম থেকে ডেটাগুলো সংগ্রহ করা (name অ্যাট্রিবিউট ব্যবহার করে)
        const bookingData = {
            userName: e.target.userName.value, // ইনপুটের name="userName" থেকে আসছে
            email: e.target.email.value,       // ইনপুটের name="email" থেকে আসছে
            serviceName: service.name,
            price: service.price,
            status: "Pending",
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
            photoUrl: service.photoUrl || service.img // ছবির লিঙ্কটি ডাটাবেসে পাঠানোর জন্য
        };

        fetch('https://visit-nature-server.onrender.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('আপনার বুকিংটি সফলভাবে গ্রহণ করা হয়েছে! 🎉');
                    e.target.reset();
                } else {
                    alert('বুকিং ব্যর্থ হয়েছে, আবার চেষ্টা করুন।');
                }
            })
            .catch(err => {
                console.error("Booking Error:", err);
                alert('সার্ভারে সমস্যা হচ্ছে। পরে চেষ্টা করুন।');
            });
    };

    return (
        <div className="container py-5">
            <div className="row">
                {/* সার্ভিস কার্ড অংশ */}
                <div className="col-md-5 mb-4">
                    <div className="card border-0 shadow-sm p-3">
                        {service.photoUrl || service.img ? (
                            <img src={service.photoUrl || service.img} className="rounded mb-3 img-fluid" alt={service.name} />
                        ) : (
                            <div className="text-center p-5 bg-light rounded">Loading Image...</div>
                        )}
                        <h3 className="fw-bold text-success">{service.name || "Loading..."}</h3>
                        <p className="text-muted">{service.description}</p>
                        <h4 className="fw-bold">Cost: ৳{service.price}</h4>
                    </div>
                </div>

                {/* বুকিং ফর্ম অংশ */}
                <div className="col-md-7">
                    <div className="bg-white p-4 shadow-sm rounded border">
                        <h2 className="mb-4 fw-bold text-dark">Complete Your Booking</h2>
                        <form onSubmit={handleConfirmBooking}>

                            {/* Full Name - এডিটেবল করা হয়েছে */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Full Name</label>
                                <input
                                    type="text"
                                    name="userName"
                                    defaultValue={user?.displayName}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Email Address - এডিটেবল করা হয়েছে */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Contact Number */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Contact Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="017XXXXXXXX"
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Shipping/Pickup Address</label>
                                <textarea
                                    name="address"
                                    rows="3"
                                    placeholder="Enter your full address"
                                    className="form-control"
                                    required
                                ></textarea>
                            </div>

                            {/* Journey Date */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Journey Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-success w-100 py-3 fs-5 fw-bold shadow-sm rounded-pill">
                                Confirm & Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm,