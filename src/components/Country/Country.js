import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="container">
            <img src={props.country.flag} alt={props.country.name}/>
            <h4>Country Name: {props.country.name}</h4>
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p>
        </div>
    );
};

export default Country;