import React from "react";
import { NavLink } from "react-router-dom";



const Nav = ({dogs}) => {
    const link = dogs.map(dog => (
        <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
        </NavLink>
    ))

    return (
        <div>{link}</div>
    )
}

export default Nav;