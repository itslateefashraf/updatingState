import React, { useState } from 'react'
interface Props{
    name: string;
    color:string;
    modelno:number;
}

const updateObject = (Props:any) => {
    const [car, setCar] = useState({
      name: "Swift",
      color: 'Red',
      modelno: 444,  
    });
    const handleClick = ()=>{
        setCar({...car, modelno:555})
    }
  return (
    <div>
        <p>{JSON.stringify(car)}</p>
        <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default updateObject;