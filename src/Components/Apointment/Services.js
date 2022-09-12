import React from 'react';

const Services = ({service, setTreatment}) => {
    const {name, slots}=service;
    return (
        <div class="card shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title text-secondary">{name}</h2>
            <p>{slots[3]}</p>
            <p>
                {
                    slots.length
                    ?
                    <span>{slots.length} Available Slots</span>
                    :
                    <span className='text-red-500 font-bold'>There is no slots</span>
                }
            </p>
            <div class="card-actions">
            <label disabled={slots.length===0}
            onClick={() => setTreatment(service)}
            for="booking-modal"
            class="btn modal-button btn-secondary">Book Apointment</label>
            </div>
        </div>
        </div>
    );
};

export default Services;