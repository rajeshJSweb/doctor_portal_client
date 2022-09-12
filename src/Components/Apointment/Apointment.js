import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AvailableApointment from './AvailableApointment';
import MakeApointment from './MakeApointment';

const Apointment = () => {
    const [date, setDate]=useState(new Date())
    return (
        <div>
            <MakeApointment date={date} setDate={setDate}></MakeApointment>
            <AvailableApointment date={date}></AvailableApointment>
            <Footer></Footer>
        </div>
    );
};

export default Apointment;