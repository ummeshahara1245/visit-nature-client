import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Booking = ({service}) => {
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    
    const date = new Date();
    const status = 'Approved';
    
    const onSubmit = data => {
        fetch('https://bloodcurdling-cat-39172.herokuapp.com/services/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, date, user: user.email, service, status})
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('You have booking successfully!');
                reset();
                history.push('/orderPlace')
            }
        })
    };
    return (
        <div>
            <div className="mb-5 mt-5">
                <form className="flex flex-col w-80 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded-full " {...register("name", {required: true})} placeholder="Name"/>
                    <input defaultValue={user?.email} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded-full " {...register("duration", {required: true})} placeholder="Email"/>
                    <input defaultValue={user?.phone}className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded-full " type="photo" {...register("phone", {required: true})} placeholder="Phone"/>
                    <input defaultValue={user?.address} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded-full " {...register("address", {required: true})} placeholder="Address"/>
                    <input className="py-2 px-5 rounded-full mx-auto bg-green-600 text-white text-xl font-semibold mt-3" type="submit" value="Booking Please" />
                </form>
            </div>
        </div>
    );
};

export default Booking;