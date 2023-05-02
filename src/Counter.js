// import React, { useState } from 'react'
import React,{useState} from 'react' 
const Counter = () => {

     const [count,setCount] =useState(0);

     const AddValue =()=>{
        setCount(count+1);
     }
     const MinValue =()=>{
        setCount(count-1);
          }
          const ResetValue =()=>{
            setCount(0);
              }
  return (
    <div>
      
      <h1>Counter {count} </h1>
      <button onClick={AddValue}>Add</button>
      <button onClick={ResetValue}>ResetValue</button>
      <button onClick={MinValue}>Min</button>

       
    </div>
  )
}

export default Counter
