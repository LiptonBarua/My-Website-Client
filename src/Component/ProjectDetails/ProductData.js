import React from 'react';
import './ProductData.css'

const ProductData = ({ productCategorie }) => {
    console.log(productCategorie)
    return (
        <div>
            <div className="cardDetails shadow-xl">
                <figure><img src={productCategorie.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-orange-500">{productCategorie.website_name}</h2>
                    <p className='text-justify'>{productCategorie.question}</p>

                </div>
            </div>
        </div>
    );
};

export default ProductData;