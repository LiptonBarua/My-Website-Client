import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardProjects from './CardProjects';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Animation from './Animation';


const Home = () => {
    const cards= useLoaderData();
    console.log(cards)
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10 max-w-[80%] mx-auto'>
              {
                 cards?.map(card=><CardProjects key={card._id} card={card}></CardProjects>)
               }
            </div>
            <ContactForm></ContactForm>
           <Animation></Animation>
        </div>
    );
};

export default Home;