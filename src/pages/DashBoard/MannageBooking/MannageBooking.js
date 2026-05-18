import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // ১. সার্ভার থেকে সব ইউজারের বুকিং ডাটা লোড করা
    useEffect(() => {
        fetch(`https://visit-nature-server.onrender.com/bookings`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data);
                setIsLoading(false);
            });
    }, []);

    // ২. স্ট্যাটাস আপডেট করার ফাংশন (Pending -> Approved)
    const handleUpdateStatus = (id) => {
        fetch(`https://visit-nature-server.onrender.com/bookings/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Status Updated to Approved!");
                    // লোকাল স্টেট আপডেট করা যাতে রিলোড ছাড়া পরিবর্তন দেখা যায়
                    const updated = allBookings.map(booking =>
                        booking._id === id ? { ...booking, status: 'Approved' } : booking
                    );
                    setAllBookings(updated);
                }
            });
    };

    // ৩. বুকিং ডিলিট করার ফাংশন
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete this booking?");
        if (proceed) {
            fetch(`https://visit-nature-server.onrender.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted successfully!");
                        const remaining = allBookings.filter(booking => booking._id !== id);
                        setAllBookings(remaining);
                    }
                });
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            <div className="md:w-64 bg-white shadow-md">
                <Sidebar />
            </div>

            <div className="flex-1 p-5 md:p-10">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                        Manage All Bookings <span className="text-blue-500">({allBookings.length})</span>
                    </h2>

                    {isLoading ? (
                        <div className="text-center py-10">Loading all bookings...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-800 text-white text-sm uppercase">
                                    <tr>
                                        <th className="px-6 py-3 text-left">User Info</th>
                                        <th className="px-6 py-3 text-left">Package</th>
                                        <th className="px-6 py-3 text-left">Status</th>
                                        <th className="px-6 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {allBookings.map((booking) => (
                                        <tr key={booking._id} className="border-b hover:bg-gray-50 transition">

                                            {/* User Info (আপনার ডাটাবেসে এখন userName আছে) */}
                                            <td className="px-6 py-4 text-sm text-left">
                                                <p className="font-bold text-gray-800">
                                                    {booking.userName || booking.name || "Guest User"}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {booking.email || "No Email"}
                                                </p>
                                            </td>

                                            {/* Package Column (serviceName এবং price সরাসরি আছে) */}
                                            <td className="px-6 py-4 text-left">
                                                <p className="font-semibold text-green-700">
                                                    {/* নতুন ডাটাবেসে serviceName আর পুরনোগুলোতে service.name */}
                                                    {booking.serviceName || booking.service?.name || "N/A"}
                                                </p>
                                                <p className="text-sm font-medium">
                                                    {/* সরাসরি price আছে কি না চেক করবে, না থাকলে service.price */}
                                                    ৳ {booking.price || booking.service?.price || "0"}
                                                </p>
                                            </td>

                                            {/* Status Column */}
                                            <td className="px-6 py-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${booking.status === 'Approved'
                                                        ? 'bg-green-100 text-green-600'
                                                        : 'bg-yellow-100 text-yellow-600'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                                {/* স্ট্যাটাস পেন্ডিং থাকলে আপডেট বাটন দেখাতে পারেন */}
                                                {booking.status === 'Pending' && (
                                                    <button
                                                        onClick={() => handleUpdateStatus(booking._id)}
                                                        className="ml-2 text-blue-500 hover:underline text-xs"
                                                    >
                                                        Approve Now
                                                    </button>
                                                )}
                                            </td>

                                            {/* Action Column */}
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    onClick={() => handleDelete(booking._id)}
                                                    className="text-red-400 hover:text-red-600 transition"
                                                >
                                                    <i className="fas fa-trash-alt text-lg"></i>
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

export default ManageBookings;