// Card.js
import React from 'react';

const Card = ({ele}) => {
    const { name, capital, population, interesting_facts } = ele
    return (
        <div className="bg-zinc-900 text-white shadow-md shadow-orange-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-95">
            <div className="p-5 ">
            <h2 className='font-bold'>{name}</h2>
                <h2 className="mb-2 ">{capital}</h2>
                <p className="">Population: {population}</p>
                <p>Interesting Facts: {interesting_facts}</p>
            </div>
        </div>
    );
};

export default Card;
