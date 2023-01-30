import React, { useEffect, useState } from 'react'

export default function Country() {

  const [countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then( response => response.json())
    .then(data => setCountries(data))
  },[])

  return (
    <>
    {
      countries.map(country=> <li>{country.name.common}</li>
)
    }
      <div>{countries.length}</div>
      <div>

      </div>
    </>
  );
}
