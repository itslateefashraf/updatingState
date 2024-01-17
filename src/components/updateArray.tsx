import React, { useState } from 'react'

const UpdateArray = () => {
    const [Name, setName] = useState([
      'lateef','faizan','owais'  
    ]);
    const updateArray = ()=>{
      setName(Name.map(name => name === 'owais' ? 'Arslan':name))
    }
  return (
    <div>
       
       <p>{Name .join('  ')}</p>
        <button onClick={updateArray}>Button</button>
    </div>
  )
}

export default UpdateArray;