import React from 'react';
import treatment from './../../../../src/assets/images/treatment.png'

const MiddileBanner = () => {
    return (
      <div class="hero min-h-screen mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='treatemt'/>
          <div className="">
            <div className='text-center px-2'>
              <h1 class="text-3xl font-bold text-start">Exceptional Dental Care, on Your Terms</h1>
              <p class="text-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
            <button className='btn border-0 text-white mt-5 bg-gradient-to-r from-secondary to-primary ...'>Get Started</button>
          </div>
        </div>
    </div>
    );
};

export default MiddileBanner;