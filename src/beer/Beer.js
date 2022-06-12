import React, {useState, useEffect} from "react";

const Beer = ({ beer2 }) => {
    const [beerTypes, setBeerTypes] = useState([])

    useEffect( () => {
        setBeerTypes(beer2.type)
  }, []);
    return (
        <>
        <h3>Beer name: {beer2.name}</h3>
        <h3>Beer location: {beer2.location}</h3>
        <h3>Beer description: {beer2.description} </h3>
        <h3>Beer type: {beerTypes[0]} </h3>
        <h3>Beer brewer: {beer2.brewer} </h3>
        <h3>Beer rating: {beer2.rating} </h3>
        <h3>Beer picture: {beer2.picture} </h3>
        </>
    )
}

export default Beer;