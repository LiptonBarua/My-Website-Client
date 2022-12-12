import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbch8yl', 'template_gwmk065', form.current, 'Mwbeb29rmiwI4XusA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className=' my-20 '>
            <h1 className='my-10 text-3xl text-center '>Contact From</h1>
            <form ref={form} onSubmit={sendEmail}>

                <div className="hero ">
                    <div className="hero-content flex-col">

                        <div className="card flex-shrink-0  shadow-2xl ">
                            <div className="card-body bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Name" className="input input-bordered w-80 md:w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="Email" className="input input-bordered w-80 md:w-96" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" name="message" placeholder="Message" className="input input-bordered w-80 md:w-96" />
                              
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning text-xl">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;