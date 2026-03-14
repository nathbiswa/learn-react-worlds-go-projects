
import React, { useState } from 'react';



const Country = ({ country }) => {
    // console.log(country.region.region);

    const [visited, setVisited]= useState(false);
    const visitedCountry = () => {
        // First basic system
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
    // Second system

    // setVisited(visited ? false: true);
    setVisited(!visited);

    }
    return (
        <div className={`cart ${visited && 'country-bg'}`}>
            <div>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h3>Country name: {country.name.common}</h3>
                <h3>Cpital: {country.capital.capital}</h3>
                <span>Pupulation: {country.population.population}</span>
                <p>Region: {country.region.region}</p>
                <p>Area: {country.area.area} {country.area.area > 300000 ?
                    'Big Country' : 'Samll Country'}</p>
                <button onClick={visitedCountry}>
                    {visited ? 'Visited' : 'Not Visted'}
                </button>
            </div>

        </div>
    );
};

export default Country;