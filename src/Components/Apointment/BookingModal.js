import React from 'react';

const BookingModal = ({treatment}) => {
    const {name, slots}=treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg">{treatment.name}</h3>
                <div className='grid grid-flow-row auto-rows-max justify-center justify-items-center'>
                    <form className='grid grid-cols-1 gap-2'>
                    <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" value="Submit" class="btn btn-bordered btn-secondary w-full max-w-xs" />
                    </form>
                </div>
                <div class="modal-action">
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;