import React from 'react';

const Info = ({bgclass, img, title, desc}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgclass}`}>
        <figure>
            <img className='p-7' src={img} alt="Album"/>
        </figure>
        <div class="card-body grid justify-items-start">
            <h2 class="card-title">{title}</h2>
            <p>{desc}</p>
        </div>
        </div>
    );
};

export default Info;