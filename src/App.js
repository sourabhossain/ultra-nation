import React, {useState, useEffect} from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      {    
          countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
