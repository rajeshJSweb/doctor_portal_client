import React from 'react';

const Testimonial = ({user}) => {
    return (
        <div className='px-10 mb-10 shadow-xl rounded-lg'>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut nesciunt dolor doloremque animi facere?</p>
            </div>
            <div className='flex justify-center items-center mt-10 py-10'>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.img} alt='avatar' />
                    </div>
                </div>
                <div className='px-10'>
                    <h1 className='font-bold'>{user.name}</h1>
                    <h4>{user.address}</h4>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;