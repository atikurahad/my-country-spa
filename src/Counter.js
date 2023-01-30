import React, { useState } from 'react'

export default function Counter() {
 const [count, setCount] = useState(0);

 const increaseCount =()=>  setCount(count+1);

 const decreaseCount = () => setCount(count-1);



 return (
   <>
     <div>
       <h1>Count :{count}</h1>
       <button onClick={decreaseCount}> Decrease</button>
       <button onClick={increaseCount}> Icrease</button>
     </div>
   </>
 );
}
