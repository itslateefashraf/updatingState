import { useState } from "react";

function UpdateNestedObject() {
   const [Fruits, setFruits] = useState({
    name: "Mango",
    price: 100,
    quantity:{
    weight: '1kg',
    quality: 'fresh'
    },
   });
   const handleClick = ()=>{
    setFruits({...Fruits,quantity:{...Fruits.quantity, quality:'low'}})
   }
    
    return(
        <>
        <p>
           name: {Fruits.name},
           price: {Fruits.price},
           weight: {Fruits.quantity.weight},
           quality: {Fruits.quantity.quality}

        </p>
       <button onClick={handleClick}>Button</button>
        </>

    );
}
export default UpdateNestedObject;