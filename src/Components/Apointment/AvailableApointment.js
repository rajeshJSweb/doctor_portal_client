import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableApointment = ({date}) => {
    const [services, setServices]=useState([])
    const [treatment, setTreatment]= useState(null)
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <p>You Picked on: {format(date, "PP")}</p>
            <div className='grid lg:grid-cols-3 gap-5 px-10'>
            {
                services.map(service => <Services
                key={service._id}
                service={service}
                setTreatment={setTreatment}
                ></Services>)
            }
            </div>
            {
                treatment && <BookingModal treatment={treatment} services={services}></BookingModal>
            }
        </div>
    );
};

export default AvailableApointment;