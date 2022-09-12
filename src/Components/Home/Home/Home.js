import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MiddileBanner from '../Banner/MiddleBanner';
import CardInfo from '../CardInfo/CardInfo';
import HomeApointment from '../HomeApointment/HomeApointment';
import HomeContact from '../HomeContact/HomeContact';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardInfo></CardInfo>
            <Services></Services>
            <MiddileBanner></MiddileBanner>
            <HomeApointment></HomeApointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;