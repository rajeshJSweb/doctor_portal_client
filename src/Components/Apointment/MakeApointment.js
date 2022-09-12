import React from 'react';
import chair from './../../../src/assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MakeApointment = ({date,setDate}) => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} alt="chair" />
            <div>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                />
            </div>
        </div>
        </div>
    );
};

export default MakeApointment;