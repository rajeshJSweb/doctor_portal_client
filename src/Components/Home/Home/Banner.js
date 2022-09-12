import React from 'react';
import chair from './../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div class='grid lg:justify-items-start sm:justify-items-center'>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary ...">Get Started</button>
        </div>
        </div>
        </div>
    );
};

export default Banner;