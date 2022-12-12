import React from 'react';
import ProductData from './ProductData';

const Product = ({card}) => {

    const {product}=card;
    console.log(product)
    return (
        <div className='my-20'>
           <div className='text-center'>
             <h1 className='text-3xl mb-20'>Product Details</h1>
           </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-[80%] mx-auto'>
                {
                    product.map(productCategorie=><ProductData key={productCategorie.website_id} productCategorie={productCategorie}></ProductData>)
                }
            </div>
        </div>
    );
};

export default Product;