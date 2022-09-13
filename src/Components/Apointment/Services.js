import React from 'react';

const Services = ({service}) => {
    const {name, slots}=service
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-secondary text-2xl text-center font-bold">{name}</h2>
                <p>{
                    slots.length>0
                    ?
                    <span>{slots[0]}</span>
                    :
                    <span>There are no slots</span>
                    }</p>
                    <p>{slots.length?<span>Available : {slots.length}</span>:<span>{slots.length}</span>}</p>
                <div class="card-actions justify-center">
                    <button className='btn btn-primary text-white border-0 font-bold bg-gradient-to-r from-secondary to-primary hover:bg-sky-700 ...'>Book Apointment</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;