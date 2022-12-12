import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import image from '../Assets/279795686_1652374505100581_1610766681983061717_n-removebg-preview.png'

const Banner = () => {
    const [state] = useState({
        title: "Hi",
        titleTwo: "I'm Lipton Barua",
        image: image
    })
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={image} className=" hidden md:block max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">{state.title}</h1>
                    <h1 className="text-4xl md:text-6xl font-bold">{state.titleTwo}</h1>
                    <div className=' text-2xl md:text-6xl text-orange-500 font-semibold'>
                    <Typewriter
                        options={{
                            strings: ["Full Stack Developer."],
                            autoStart: true,
                            loop: true,
                           
                        }}
                    />
                    </div>
                 <a href='Lipton Barua Resume.pdf' download='Lipton Barua Resume.pdf'><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-5">My Resume</button></a>

                </div>
            </div>
        </div>
    );
};

export default Banner;