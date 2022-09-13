import React from 'react';

const Services = ({service,setTreatment}) => {
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
                    <span className='text-red-500 font-bold italic'>There are no slots</span>
                    }</p>
                    <p>{slots.length?<span>Available : {slots.length}</span>:<span>{slots.length}</span>}</p>
                <div class="card-actions justify-center">
                <label 
                for="booking-modal" 
                onClick={()=>setTreatment(service)}
                disabled={slots.length===0}
                className='btn btn-primary text-white border-0 font-bold bg-gradient-to-r from-secondary to-primary hover:bg-sky-700 ...'>open modal</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;