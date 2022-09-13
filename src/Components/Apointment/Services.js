import React from 'react';

const Services = ({service}) => {
    const {name, slots}=service
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title text-secondary text-2xl text-end">{name}</h2>
                <p>{
                    slots.length
                    ?
                    <span>{slots.length} Available Slots</span>
                    :
                    <span>There are no slots</span>
                    }</p>
                <div class="card-actions justify-center">
                    <button className='btn btn-primary bg-gradient-to-r from-secondary to-primary ...'>Book Apointment</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;