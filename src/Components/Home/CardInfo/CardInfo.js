import React from 'react';
import Info from './Info';
import clock from './../../../../src/assets/icons/clock.svg'
import marker from './../../../../src/assets/icons/marker.svg'
import phone from './../../../../src/assets/icons/phone.svg'

const CardInfo = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 text-white lg:px-16'>
            <Info bgclass="bg-gradient-to-r from-primary to-secondary ..." img={clock} title="Opening Hours" desc="Lorem Ipsum is simply dummy text of the pri"></Info>
            <Info bgclass="bg-[#3A4256]" img={marker} title="Location" desc="Lorem Ipsum is simply dummy text of the pri"></Info>
            <Info bgclass="bg-gradient-to-r from-primary to-secondary ..." img={phone} title="Contact us now" desc="Lorem Ipsum is simply dummy text of the pri"></Info>
        </div>
    );
};

export default CardInfo;