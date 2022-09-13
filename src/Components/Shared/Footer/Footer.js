import { convertToHsl } from 'daisyui/src/colors/functions';
import React from 'react';
import footer from './../../../../src/assets/images/footer.png'

const Footer = () => {
    return (
        <section>
            <footer style={{
            background: `url (${footer})`,
            backgroundSize:'cover' 
        }} class="footer flex-row lg:flex-row-reverse justify-around py-7">
                <div>
                    <span class="text-secondary text-xl font-bold">Services</span> 
                    <a class="link link-hover hover:font-bold">Branding</a>
                    <a class="link link-hover hover:font-bold">Design</a>
                    <a class="link link-hover hover:font-bold">Marketing</a>
                    <a class="link link-hover hover:font-bold">Advertisement</a>
                </div> 
                <div>
                    <span class="text-secondary text-xl font-bold">Company</span> 
                    <a class="link link-hover hover:font-bold">About us</a>
                    <a class="link link-hover hover:font-bold">Contact</a>
                    <a class="link link-hover hover:font-bold">Jobs</a>
                    <a class="link link-hover hover:font-bold">Press kit</a>
                </div> 
                <div>
                    <span class="text-secondary text-xl font-bold">Legal</span> 
                    <a class="link link-hover hover:font-bold">Terms of use</a>
                    <a class="link link-hover hover:font-bold">Privacy policy</a>
                    <a class="link link-hover hover:font-bold">Cookie policy</a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;