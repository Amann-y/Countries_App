import React from "react";
import { IoEarth } from "react-icons/io5";
import countryData from "../api/countryData.json";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <section className="bg-black py-2 text-white flex items-center">
        <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="">
            <img
              src="https://img.freepik.com/free-photo/planet-earth-background_23-2150564685.jpg?t=st=1726816780~exp=1726820380~hmac=e1c54cd72386b75e809aa3a8401cac79b9de4fdad65da1545f7e652f21e7336e&w=740"
              alt="Earth"
              className="w-full h-auto rounded mix-blend-difference shadow-md shadow-orange-300"
            />
          </div>

          <div className="flex items-center flex-col justify-center gap-2 md:gap-4">
            <div className="flex flex-col sm:flex-row items-center md:gap-1 py-2">
              <h1 className="text-2xl md:text-4xl font-bold text-justify">
                Explore The World
              </h1>
              <IoEarth
                color="blue"
                size={"3rem"}
                className="animate-spin shadow-orange-300 delay-500"
              />
            </div>
            <div>
              <p className="text-xl">
                Discover the history,culture and beauty of countries. Sort,
                Search and Filter through countries to find details.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black">
        <div className="grid container px-2 md:px-0 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 md:py-4 bg-black gap-6">
          {countryData?.map((ele) => {
            return <Card key={ele.id} ele={ele} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
