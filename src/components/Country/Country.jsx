import { useState } from "react";
import "./country.css";
const Country = ({ countryData, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = countryData;
  const [visited, setVisited] = useState();

  const handleVisited = () => {
    setVisited(!visited);
  };
  // console.log(handleVisitedCountries);
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" height={50} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountries(countryData)}>
        Mark as Visited
      </button>
      <br />
      <br />
      <button onClick={handleVisited}>Visited</button>
      {visited && <h3>I have visited</h3>}
    </div>
  );
};

export default Country;
