import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CapitalList from './components/CapitalList';

function App() {
  const [capitals, setCapitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/weather/all-capitals')
      .then(res => {
        setCapitals(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Errore nel caricamento dei dati:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Previsioni Meteo - Capitali del Mondo</h1>
      {loading ? <p>Caricamento...</p> : <CapitalList data={capitals} />}
    </div>
  );
}

export default App;