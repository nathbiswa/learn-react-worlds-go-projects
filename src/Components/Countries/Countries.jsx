
import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ CountriesPromise }) => {
    // console.log(CountriesPromise);
    const countryData = use(CountriesPromise);
    const countries = countryData.countries
    // console.log(countries);
    return (
        <div>
            <h1>Countries Here:{countries.length} </h1>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;