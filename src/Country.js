import React from "react";
import './App.css'

export default function Country(props) {

  const { name, capital, region, flags, area, population } = props.country;
  return (
    <>
      <div className="country">
        <img className="country-img" src={flags.png} alt="flag" />
        <h1>
          {" "}
          Name: <span>{name.common}</span>
        </h1>
        <h3>Region: {region}</h3>
        <h4>Area: {area}</h4>
        <h3>Population: {population}</h3>
        <p>Capital: {capital}</p>
      </div>
    </>
  );
}
