import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleHome = () => {
    history.push('/home');
  };

  return (
    <div className="sidebar-container bg-white shadow-sm lg:min-h-screen p-3 d-flex flex-column">
      {/* Brand Logo Section */}
      <div
        className="sidebar-brand d-flex align-items-center justify-content-center py-4 mb-4"
        onClick={handleHome}
        style={{ cursor: 'pointer' }}
      >
        <i className="fas fa-leaf text-success fs-3 me-2"></i>
        <span className="fw-bold fs-4 text-dark">visitNature</span>
      </div>

      <div className="nav flex-column gap-2 flex-grow-1">
        {/* 1. My Bookings - ইউজারের জন্য প্রধান লিঙ্ক */}
        <NavLink
          className="sidebar-link"
          activeClassName="active-sidebar-link"
          to="/myBookings"
        >
          <i className="fas fa-suitcase me-3"></i> My Bookings
        </NavLink>

        {/* 2. Manage All Bookings - অ্যাডমিন সেকশন */}
        <NavLink
          className="sidebar-link"
          activeClassName="active-sidebar-link"
          to="/manageBookings"
        >
          <i className="fas fa-calendar-check me-3"></i> Manage Booking
        </NavLink>

        {/* 3. Add Service - নতুন সার্ভিস যোগ করা */}
        <NavLink
          className="sidebar-link"
          activeClassName="active-sidebar-link"
          to="/addService"
        >
          <i className="fas fa-plus-circle me-3"></i> Add Service
        </NavLink>

        {/* 4. Dashboard/All Services */}
        <NavLink
          className="sidebar-link"
          activeClassName="active-sidebar-link"
          to="/dashboard"
        >
          <i className="fas fa-th-large me-3"></i> Dashboard
        </NavLink>

        {/* Divider Line */}
        <hr className="my-4 text-muted" />

        {/* 5. Back to Home */}
        <NavLink
          className="sidebar-link"
          activeClassName="active-sidebar-link"
          to="/home"
        >
          <i className="fas fa-home me-3"></i> Back to Home
        </NavLink>
      </div>

      {/* Log Out Button - নিচে পুশ করার জন্য flex-grow ব্যবহার করা হয়েছে */}
      <div className="mt-auto">
        <button
          onClick={logout}
          className="logout-btn w-100 d-flex align-items-center justify-content-center gap-2 mb-3"
        >
          <i className="fas fa-sign-out-alt"></i> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;