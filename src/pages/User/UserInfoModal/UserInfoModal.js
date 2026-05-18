import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const UserInfoModal = (props) => {
    const {toggle, setToggle} = props;
    const { user, logout } = useAuth()
    const history = useHistory();



    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="absolute flex justify-end items-center mx-auto top-38 right-5 text-black">
            {
                toggle?

                <div className="w-60 p-3 rounded-md bg-white border border-black z-50">
                <div className="text-right">
                    <button className="bg-red-500 w-8 h-8 rounded text-white text-2xl font-semibold" onClick={() => setToggle(false)}>-</button>
                </div>
                <div className="flex justify-center text-center">
                    <div className="divide-y divide-gray-500 divide-solid w-full">
                        <div className="mb-3">
                            <img className="rounded-full mx-auto mb-2 border-4 border-white" src={user.photoURL} alt="" />
                            <h5 className="font-semibold m-2">{user.displayName}</h5>
                            <Link onClick={() => setToggle(false)} to="/user" className="bg-green-600 px-3 py-1 no-underline text-white rounded border-2 border-white">View Profile</Link>
                        </div>
                        <div>
                            {/* Navigation */}
                            <div className="">
                                <div className="">
                                    <Link className="text-green-500 text-2xl font-semibold w-full mt-2 no-underline hover:text-green-500" to='/'><i class="fas fa-university"></i> Home</Link><br />
                                    <div className=" mt-3">
                                    <li className="text-left pl-4 list-none bg-green-500 py-2 border border-green-500">
                                        <Link className="text-white no-underline font-semibold" to="/manageBookings"><i class="fas fa-align-justify"></i> Manage Booking</Link><br />
                                    </li>
                                    <li className="text-left pl-4 list-none bg-green-500  py-2 border border-green-500">
                                        <Link className="text-white no-underline font-semibold" to="/addService"><i class="fas fa-plus-square"></i> Add Service</Link><br />
                                    </li>
                                    <li className="text-left pl-4 list-none bg-green-500  py-2 border border-green-500">
                                        <Link className="text-white no-underline font-semibold" to="/dashboard"><i class="fas fa-border-all"></i> All Services</Link><br />
                                    </li>
                                        {/* <Link className="text-black no-underline text-lg font-semibold pl-10 w-full hover:bg-green-500" to="/allServices">All Services</Link><br /> */}
                                    <button onClick={logout} className="mt-2 rounded-lg hover:bg-green-500  transition duration-300 ease-in-out hover:text-white font-semibold border-2 border-green-500 px-3 py-2"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                                    </div>
                                </div>
                            </div>
                            {!user.email && redirectToLogin()}
                        </div>
                    </div>
                </div>
            </div> 
            : 
            
            ''}

        </div>
    );
};

export default UserInfoModal;