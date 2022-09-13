import React from 'react';
import { useState } from 'react';
import ApointmentBanner from './ApointmentBanner';
import AvailableApointment from './AvailableApointment';
import Services from './Services';

const Apointment = () => {
    const [date, setDate]=useState(new Date())
    return (
        <div>
            <ApointmentBanner date={date} setDate={setDate}></ApointmentBanner>
            <AvailableApointment date={date}></AvailableApointment>
        </div>
    );
};

export default Apointment;