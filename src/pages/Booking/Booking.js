import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Booking = ({ service }) => {
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // ইউজারের ডেটা আসার পর একবারই সেট করার জন্য এই useEffect
    useEffect(() => {
        if (user?.email) {
            // এটি আপনার ফর্মের ফিল্ডগুলোকে ভ্যালু দিয়ে আনলক করে দেবে
            const defaultValues = {
                name: user.displayName || '',
                email: user.email || '',
                phone: '',
                address: ''
            };
            reset(defaultValues);
        }
    }, [user, reset]);

    const onSubmit = data => {
        const bookingInfo = {
            userName: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            serviceName: service?.name,
            price: service?.price,
            photoUrl: service?.img,
            date: new Date().toLocaleDateString(),
            status: 'Pending'
        };

        fetch('https://visit-nature-server.onrender.com/services/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Successful!');
                    reset();
                    history.push('/dashboard/myBookings');
                }
            });
    };

    return (
        <div className="py-10">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border">
                <h2 className="text-2xl font-bold text-center mb-5">Complete Your Booking</h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                    {/* Name Field: defaultValue বা value কিচ্ছু দেবেন না */}
                    <div>
                        <label className="text-gray-600 ml-2">Name</label>
                        <input
                            className="w-full border-2 border-gray-300 px-4 py-2 rounded-full focus:border-blue-500 outline-none"
                            {...register("name", { required: true })}
                            placeholder="Enter Name"
                        />
                    </div>

                    {/* Email Field: defaultValue বা value কিচ্ছু দেবেন না */}
                    <div>
                        <label className="text-gray-600 ml-2">Email</label>
                        <input
                            className="w-full border-2 border-gray-300 px-4 py-2 rounded-full focus:border-blue-500 outline-none"
                            {...register("email", { required: true })}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 ml-2">Phone</label>
                        <input
                            className="w-full border-2 border-gray-300 px-4 py-2 rounded-full focus:border-blue-500 outline-none"
                            {...register("phone", { required: true })}
                            placeholder="Phone Number"
                        />
                    </div>

                    <div>
                        <label className="text-gray-600 ml-2">Address</label>
                        <input
                            className="w-full border-2 border-gray-300 px-4 py-2 rounded-full focus:border-blue-500 outline-none"
                            {...register("address", { required: true })}
                            placeholder="Address"
                        />
                    </div>

                    <input
                        className="bg-green-600 text-white py-2 rounded-full font-bold cursor-pointer hover:bg-green-700 mt-2"
                        type="submit"
                        value="Book Now"
                    />
                </form>
            </div>
        </div>
    );
};

export default Booking;