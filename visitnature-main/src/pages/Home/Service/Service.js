import React from 'react';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const { name, duration, photoUrl,description,price } = service?.data;
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
        <div className="">
             <div class="col">
            <div className=" bg-gray-200 text-center mt-3 mb-3 rounded card h-100">
            <img className="rounded h-60 w-full card-img-top" src={photoUrl} alt="" />
            <div class="card-body">
            <h3>{name}</h3>
            <p>Service available at:{duration}</p>
            <p>{price} BDT</p>
            <p>{description}</p>
            <button onClick={() => handleBooking(service._id)} className="bg-red-400 px-3 py-1 rounded-2xl text-white mb-2">Book Now</button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Service;