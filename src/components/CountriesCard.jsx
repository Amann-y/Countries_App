import React from "react";
import { NavLink } from "react-router-dom";

const CountriesCard = ({ ele }) => {
  const { name, capital, population, flags } = ele;
 
  return (
    <div className="bg-zinc-900 text-white shadow-md shadow-orange-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-95">
      <div className="p-5 ">
        <div className="flex justify-center">
        <img src={flags?.svg} alt="image" className="h-40 w-auto"/>
        </div>
        <h2 className="font-bold">{name?.common || name?.official}</h2>
        <h2 className="mb-2 ">Capital : {capital[0] || "No Data Available"}</h2>
        <p className="">Population: {population}</p>
        <NavLink to={`/country-detail/${name?.common}`}>
          <button className="py-1 px-2 rounded-md bg-teal-400 mt-2 hover:bg-teal-600 hover:text-black">Read More</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CountriesCard;
