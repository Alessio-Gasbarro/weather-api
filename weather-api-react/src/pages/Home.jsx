import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CapitalGrid from '../components/CapitalGrid';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <div className="home-container">
            <Header />
            {loading ? (
                <p>Caricamento...</p>
            ) : (
                <CapitalGrid data={capitals} onSelect={setSelected} selectedCity={selected?.city} selectedData={selected} />
            )}
            <Footer />
        </div>
    );
}

export default Home;
