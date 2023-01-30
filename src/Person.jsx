import React from 'react'

export default function Person(props) {

  const {name ,age ,occupation} = props;
  return (
    <>

    {<div className="container">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Profession: {occupation}</p>
    </div> }

    </>
  )

}
