import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CapitalList from '../components/CapitalList';
import CapitalDetails from '../components/CapitalDetails';

function Home() {
    const [capitals, setCapitals] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/weather/all-capitals')
            .then(res => {
                setCapitals(res.data);
                setSelected(res.data[0]);
                setLoading(false);
            })
            .catch(err => {
                console.error('Errore nel caricamento dei dati:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="App">
            <h1>Attuali condizioni Meteo</h1>
            <h1>- Capitali del Mondo -</h1>
            {loading ? (
                <p>Caricamento...</p>
            ) : (
                <>
                    <CapitalList data={capitals} onSelect={setSelected} selectedCity={selected?.city} />
                    <CapitalDetails data={selected} />
                </>
            )}
        </div>
    );
}

export default Home;