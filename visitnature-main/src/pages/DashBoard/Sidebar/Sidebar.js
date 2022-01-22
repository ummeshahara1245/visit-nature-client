import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Sidebar = () => {
  const history = useHistory();
  const { logout } = useAuth();
  const handleHome  = () => {
    history.push('/home')
  }
    return (
      <div className="bg-gray-100">
        <button className="text-green-500 text-2xl font-semibold w-full mb-10 mt-2" onClick={handleHome}><i class="fas fa-university"></i> Home</button><br />
        <div className="lg:h-screen">
          <li className="list-none bg-green-500 px-8 py-2 border border-green-500 text-white">
            <Link className="text-white no-underline font-semibold" to="/manageBookings"><i class="fas fa-align-justify"></i> Manage Booking</Link><br />
          </li>
          <li className="list-none bg-green-500 px-8 py-2 border border-green-500 text-white">
            <Link className="text-white no-underline font-semibold" to="/addService"><i class="fas fa-plus-square"></i> Add Service</Link><br />
          </li>
          <li className="list-none bg-green-500 px-8 py-2 border border-green-500 text-white">
            <Link className="text-white no-underline font-semibold" to="/dashboard"><i class="fas fa-border-all"></i> All Services</Link><br />
          </li>
            {/* <Link className="text-black no-underline text-lg font-semibold pl-10 w-full hover:bg-green-500" to="/allServices">All Services</Link><br /> */}
        <button onClick={logout} className="md:mt-40 m-10 ml-14 rounded-lg hover:bg-green-500  transition duration-300 ease-in-out hover:text-white font-semibold border-2 border-green-500 px-3 py-2"><i className="fas fa-sign-out-alt"></i> Log Out</button>
        </div>
      </div>
    );
};

export default Sidebar;