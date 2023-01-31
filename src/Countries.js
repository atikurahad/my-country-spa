import React, { useEffect, useState } from "react";
import Country from "./Country";
import './App.css'

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div className="display-country">
        {countries.map((country) => (
          <Country
            className="countries "
            country={country}
            key={country.ccn3}
          />
        ))}
      </div>

      <div>{countries.length}</div>
      <div></div>
    </>
  );
}
