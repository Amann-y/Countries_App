import React from "react";
import countryData from "../api/countryData.json";
import Card from "../components/Card";

const About = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="container mx-auto">
        <p className="text-2xl text-center uppercase mb-4">Here are the interesting facts</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 gap-6">
          {countryData?.map((ele) => {
            return <Card key={ele.id} ele={ele} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

