import React from 'react';
import { format } from 'date-fns';

const BookingSection = ({treatment,date,setTreatment}) => {
    const {name, slots}=treatment;

    const handleBooking=event=>{
        event.preventDefault();
        const slot=event.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <div className='flex flex-col space-y-4 justify-center mt-10'>
                    <form onSubmit={handleBooking} className='space-y-4'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot=><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Full Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs font-bold text-white" />
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingSection;