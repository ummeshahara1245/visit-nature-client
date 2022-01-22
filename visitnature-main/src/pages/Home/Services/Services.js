import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://bloodcurdling-cat-39172.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="w-100">

<div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
            {
                services.map(service => <Service service={service} key={service._id} />)
            }
        </div>
        </div>
    );
};

export default Services;