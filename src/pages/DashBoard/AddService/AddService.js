import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    // user কে ইগনোর করার জন্য নিচের লাইনটি যোগ করা হয়েছে
    // eslint-disable-next-line
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://visit-nature-server.onrender.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Service added successfully! 🎉');
                    reset();
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* সাইডবার সেকশন */}
            <div className="md:w-64 bg-white shadow-lg">
                <Sidebar />
            </div>

            {/* ফর্ম সেকশন */}
            <div className="flex-1 p-8">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-green-600">Add New Service</h2>
                        <p className="text-gray-500 mt-2">Fill up the form to create a new tour package</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ms-2">Package Name</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                {...register("name", { required: true })}
                                placeholder="e.g. Sajek Valley Premium"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ms-2">Description</label>
                            <textarea
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all h-24"
                                {...register("description", { required: true })}
                                placeholder="Write about the beauty of this place..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 ms-2">Duration</label>
                                <input
                                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                    {...register("duration", { required: true })}
                                    placeholder="e.g. 3 Days, 2 Nights"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 ms-2">Price (BDT)</label>
                                <input
                                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                    type="number"
                                    {...register("price", { required: true })}
                                    placeholder="e.g. 6500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 ms-2">Photo URL</label>
                            <input
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                                {...register("photoUrl", { required: true })}
                                placeholder="Paste image direct link here"
                            />
                        </div>

                        <div className="pt-4 text-center">
                            <input
                                className="w-full md:w-60 py-3 rounded-xl text-lg text-white font-bold cursor-pointer transition duration-300 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-lg hover:shadow-green-200"
                                type="submit"
                                value="Confirm & Add Service"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;