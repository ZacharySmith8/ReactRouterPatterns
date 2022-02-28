import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import dogs from "./dogs";



const DogDetails = () => {
 const {name} = useParams();
 let filter = dogs.filter(dog => dog.name.toLocaleLowerCase() === name)[0];
 const [dog, setDog] = useState(filter)

 
 useEffect(() => {
    setDog(filter);
 }, [name])
  
    return (
        <>
         <div className="container">
            
            <div className="dogPhoto">
                <img src={dog.src}></img>
            </div>
            <div className="dogInfo">
                <h2>{dog.name}</h2>
                <h3>Age: {dog.age}</h3>
                <ol>
                Fun Facts
                {dog.facts.map(fact => <li>{fact}</li>)}
                </ol>
            </div>
         </div>
        </>
    )
}



export default DogDetails;