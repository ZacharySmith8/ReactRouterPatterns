import React from "react";


const filterDog = ({dogs}) => {
    const [dog, setDog] = useState(null);

 useEffect(() => {
    let filter =dogs.filter(dog => dog.name.toLowerCase()=== name)[0];
    setDog(filter);
 }, [name])
}