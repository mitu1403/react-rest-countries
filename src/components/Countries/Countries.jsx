import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <>
      <h3>Countries: {countries.length}</h3>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} countryData={country} />
        ))}
      </div>
    </>
  );
}
