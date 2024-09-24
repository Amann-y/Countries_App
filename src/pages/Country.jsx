import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/axiosApis";
import CountriesCard from "../components/CountriesCard";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      setCountries(response?.data);
    });
  }, []);

   const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );


  if (isPending) {
    return (
      <div className="bg-black text-white h-screen py-4 flex justify-center">
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="bg-black">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries = {setCountries}
      />
      <div className="grid container px-2 md:px-0 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 md:py-4 gap-6">
        {filteredCountries.length > 0 ? (
          filteredCountries?.map((ele, ind) => {
            return <CountriesCard ele={ele} key={ind} />;
          })
        ) : (
          <div className="text-xl text-white">No Data Found</div>
        )}
      </div>
    </section>
  );
};

export default Country;
