import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getSingleCountryData } from "../api/axiosApis";

const CountryDetails = () => {
  const { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // Changed to store a single country

  useEffect(() => {
    startTransition(async () => {
      const response = await getSingleCountryData(id);
      console.log(response.data[0]);
      if (response.status === 200) {
        setCountry(response.data[0]);
      }
    });
  }, [id, startTransition]);

  if (isPending) {
    return (
      <div className="bg-black text-white h-screen py-4 flex justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 text-white px-1 py-1">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4">
        <div className="flex justify-center">
          <img
            src={country?.flags?.svg}
            alt="Country Flag"
            className="h-56 sm:h-72 md:h-96 lg:h-full w-auto"
          />
        </div>

        <div className="flex flex-col items-center gap-2 md:gap-5">
          <h1 className="text-2xl font-semibold">Country Details</h1>
          <h2 className="text-xl font-semibold">{country?.name?.common || country?.name?.official}</h2>
          <p>Population: {country?.population.toLocaleString() || "No Data"}</p>
          <p>Region: {country?.region || "No Data"}</p>
          <p>Sub-Region: {country?.subregion || "No Data"}</p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <p>Languages: </p>
            {
              country && Object.values(country?.languages)?.map((ele,ind)=>{
                return <button key={ind} className="outline-none border p-1 rounded">{ele}</button>
              })
              
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
