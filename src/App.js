import React, {useState, useEffect} from 'react';
import './App.css';

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
      <header className="App-header">
        <h1>{countries.length}</h1>
      </header>
    </div>
  );
}

export default App;
