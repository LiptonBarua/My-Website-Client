import React from 'react';
import { Link } from 'react-router-dom';
import './CaardProject.css'


const CardProjects = ({ card }) => {
   const {_id, website_name, website, image1, githubClient, githubServer} = card;
   console.log(image1)
    return (
        <div data-aos="flip-up">
            <div className="card card-compact bg-base-100 shadow-2xl ">
                <figure><img src={image1} alt="" /></figure>
                <div className="card-body mt-4">
                    <h2 className="card-title">{website_name}</h2>
                    <a href={website}> <button className="btn btn-sm btn-info w-full">Live Site</button></a>
                  
                    <div className="flex justify-between mt-5">
                        <a href={githubClient}> <button className="btn btn-sm btn-info w-full">Github Client</button></a>
                        <a href={githubServer}> <button className="btn btn-sm btn-info w-full">Github Server</button></a>
                        
                    </div>
                    <Link to={`/product/${_id}`}><button className="btn btn-sm btn-info w-full">Project Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardProjects;