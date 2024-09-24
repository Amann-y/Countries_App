import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

export const getSingleCountryData = (id) => {
  return api.get(`/name/${id}?fullText=true&fields=name,population,region,subregion,capital.tld,currencies,languages,borders,flags`);
};
