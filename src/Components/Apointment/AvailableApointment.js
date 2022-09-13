import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingSection from './BookingSection';
import Services from './Services';

const AvailableApointment = ({date}) => {
    const [services, setServices]=useState([]);
    const [treatment, setTreatment]=useState(null)
    
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <p>You picked {format(date, 'PP')}.</p>;
           <div className='grid lg:grid-cols-3 gap-8 mx-5 lg:mx-20'>
           {
                services.map(service => <Services
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></Services>)
            }
           </div>
           {
            treatment && <BookingSection
            key={treatment._id} 
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
            ></BookingSection>
           }
        </div>
    );
};

export default AvailableApointment;