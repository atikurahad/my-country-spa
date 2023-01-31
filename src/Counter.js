import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {


 const [count ,setCount]= useState(0);

const handleIncrease= () => setCount(count+1)
const handleDecrease =()=> setCount(count-1)


 return (
   <>
     <div>
      <h1>Count {count}</h1>
       <button onClick={handleDecrease}>-</button>
       <button onClick={handleIncrease}>+</button>
     </div>
   </>
 );
}
