import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
     const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        fetch('https://bloodcurdling-cat-39172.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, admin: user.email})
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                alert('You have added service');
                reset();
            }
        })
    };

    return (
        <div className="sm:flex block">
            <div className="w-60">
                <Sidebar />
            </div>
            <div className=" mx-auto mt-4 text-center">
                <h1 className="text-green-500">Add Service</h1>
                <form className="flex flex-col w-80" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("name", {required: true})} placeholder="Service Name"/>
                    <textarea className="border-2 border-gray-300 m-2 px-2 rounded" {...register("description", {required: true})} placeholder="Service description"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("duration", {required: true})} placeholder="Service duration"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("photoUrl", {required: true})} placeholder="Photo Url"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" type="number" {...register("price", {required: true})} placeholder="Service Price"/>
                    < input className = "w-40 mx-auto py-2 rounded text-lg text-white font-semibold mt-4 transition duration-500 ease-in-out bg-green-600 hover:bg-green-800 transform hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-green-400 to-green-500"
                    type = "submit"
                    value = "Add Service" / >
                </form>
            </div>
        </div>
    );
};

export default AddService;