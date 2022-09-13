import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Services from './Services';

const AvailableApointment = ({date}) => {
    const [services, setServices]=useState([]);
    
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <p>You picked {format(date, 'PP')}.</p>;
           <div className='grid lg:grid-cols-3 gap-8 mx-20'>
           {
                services.map(service => <Services
                key={service._id}
                service={service}

                ></Services>)
            }
           </div>
        </div>
    );
};

export default AvailableApointment;