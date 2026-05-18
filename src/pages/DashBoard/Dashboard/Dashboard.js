import React from 'react';
import AllServices from '../AllServices/AllServices';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="sm:flex block">
            <div className="w-60">
                <Sidebar />
            </div>
            <div className="full">
                <AllServices />
            </div>
        </div>
    );
};

export default Dashboard;