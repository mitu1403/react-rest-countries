import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    console.log('adding this country to visited countries')
    // console.log(country);
    if(!visitedCountries.includes(country)){
      setVisitedCountries([...visitedCountries, country])
    }
  };
  console.log(visitedCountries)
  return (
    <>
      <h3>Countries: {countries.length}</h3>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <h5>List of Visited Countries: {visitedCountries.map(item => <li key={item.cca3}>{item.name.common}</li>)}</h5>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            countryData={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </>
  );
}
