import React from 'react';
import { motion } from "framer-motion"
import image from '../Assets/1_1dkUNOPVLoks_RVf-5pEsA.png'

const About = () => {
    return (
        <div className='md:max-w-[80%] mx-auto'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='md:ml-40'>
                   
                    <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6 text-justify">I am a full stack developer. I can provide clean code and pixel perfect designs. I make the website more interactive with web animations. I can provide clean code and pixel perfect designs. I also make the website more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their devices</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;