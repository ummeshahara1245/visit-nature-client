import React, {useState, useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch('https://bloodcurdling-cat-39172.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])

    const filterBooking = bookings.filter(booking => booking.user === user.email)
    
    // Delete booking
       const handleDeleteService = id => {
           console.log(id)
           const proceed = window.confirm('Are you sure, you want to delete?')
           if (proceed) {
               const url = `https://bloodcurdling-cat-39172.herokuapp.com/bookings/${id}`;
               fetch(url, {
                       method: 'DELETE',
                   })
                   .then(res => res.json())
                   .then(data => {
                       if (data.deletedCount) {
                           alert('delete successfully')
                           const remainingBookings = bookings.filter(service => service._id !== id);
                           setBookings(remainingBookings);
                       }
                   })
           }
       }
    return (
        <div className="sm:flex block">
            <div className="w-60">
                <Sidebar />
            </div>
            <div className="mt-5 ml-2">
                {
                filterBooking.length > 0 ?
                <table>
                    <tr className="text-center bg-yellow-300 border">
                        <th>Booking date</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Cancel</th>
                    </tr>
                        {
                            filterBooking.map(booking => (
                                <tr className="border border-black">
                                    <td className="px-5">{booking.date.slice(0, 10)}</td>
                                    <td className="px-5">{booking.service.data.name}</td>
                                    <td className="px-5">${booking.service.data.price}</td>
                                    {
                                        booking.status === 'Pending' 
                                        ?
                                        <td className="px-5 bg-red-500 rounded text-white"> <button>{booking.status}</button></td>
                                        :
                                        booking.status === 'Approved' &&
                                        <td className="px-5 bg-green-500 rounded text-white mt-2">{booking.status}</td>
                                    }
                                    <td onClick={() => handleDeleteService(booking._id)} className="px-5"><i className="fas fa-window-close text-2xl text-red-500"></i></td>
                                </tr>
                            ))
                        }
                </table>
                :
                <div>
                    <h3 className="text-red-500 text-center">You haven't booking yet, Want to booking now?</h3>
                    <Link to='/' className="bg-green-600 text-white px-4 py-2 rounded text-lg font-semibold no-underline">Make your day</Link>
                </div>
                }
            </div>
            
        </div>
    );
};

export default ManageBookings;