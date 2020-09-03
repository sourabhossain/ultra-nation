import React, {useState, useEffect} from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    setCart([...new Set([...cart, country])]);
  }

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added: {cart.length}</h3>  
      <Cart></Cart>

      {    
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
