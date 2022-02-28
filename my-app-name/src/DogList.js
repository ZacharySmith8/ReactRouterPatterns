import React from "react";




const DogList = ({dogs}) => {
    
    return (
       <>
       {dogs.map(dog => <img src={dog.src}></img>)}
       </> 
    )
}



export default DogList;