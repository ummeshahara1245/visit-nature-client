import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import Sidebar from './DashBoard/Sidebar/Sidebar';

const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // ইউজারের ইমেইল দিয়ে ডাটা লোড করা
    useEffect(() => {
        fetch(`https://visit-nature-server.onrender.com/myBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
                setIsLoading(false);
            });
    }, [user?.email]);

    // বুকিং ক্যান্সেল করার ফাংশন
    const handleCancel = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel this booking?");
        if (proceed) {
            fetch(`https://visit-nature-server.onrender.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Cancelled successfully!");
                        const remainingBookings = myBookings.filter(booking => booking._id !== id);
                        setMyBookings(remainingBookings);
                    }
                });
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="md:w-64 bg-white shadow-md">
                <Sidebar />
            </div>

            {/* Content Area */}
            <div className="flex-1 p-5 md:p-10">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                        My Bookings <span className="text-green-500">({myBookings.length})</span>
                    </h2>

                    {isLoading ? (
                        <div className="text-center py-10">Loading your trips...</div>
                    ) : myBookings.length === 0 ? (
                        <div className="text-center py-10 text-gray-500">
                            You haven't booked any trips yet.
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-3 text-left">Package Name</th>
                                        <th className="px-6 py-3 text-left">Price</th>
                                        <th className="px-6 py-3 text-left">Date</th>
                                        <th className="px-6 py-3 text-left">Status</th>
                                        <th className="px-6 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {myBookings.map((booking) => (
                                        <tr key={booking._id} className="border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-semibold text-green-700">
                                                {booking.serviceName}
                                            </td>
                                            <td className="px-6 py-4">৳{booking.price}</td>
                                            <td className="px-6 py-4 text-sm">{booking.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'Approved'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    onClick={() => handleCancel(booking._id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                    title="Cancel Booking"
                                                >
                                                    <i className="fas fa-trash-alt"></i> Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;