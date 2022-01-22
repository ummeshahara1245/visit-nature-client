import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const OrderPlace = () => {
    const {user} = useAuth();
    const history = useHistory();

    const handleManageBookings = () => {
        history.push('/manageBookings')
    }
    return (
        <div className="h-screen text-center">
            <h3 className=" mt-5">
            Thank you <span className="text-green-600">{user.displayName}</span> for booking our service!!! We will send you an email.
            </h3>
            <button onClick={handleManageBookings} className="bg-green-500 px-3 py-2 rounded-lg text-lg font-semibold text-white">See Your Bookings</button>
        </div>
    )
}

export default OrderPlace;