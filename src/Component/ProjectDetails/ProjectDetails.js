import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const ProjectDetails = () => {
    const productsDetails= useLoaderData();
    return (
        <div>
             <div>
                {
                    productsDetails.map(card=><Product key={card._id} card={card}></Product>)
                }
             </div>
        </div>
    );
};

export default ProjectDetails;