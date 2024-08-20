import React,{useState} from 'react';


function Ust()
 {
const [count,setCount]=useState(10);

const decrement=()=>
{
  setCount((count)=>count-1);
  setCount((count)=>count-1);

}
const increment=()=>
  {
    setCount((count)=>count+1);
    setCount((count)=>count+1);
  
  }
  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    
    </>
   
  );
}

export default Ust;
