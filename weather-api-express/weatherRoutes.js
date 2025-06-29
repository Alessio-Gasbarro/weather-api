const express = require('express');
const axios = require('axios');
const router = express.Router();

const capitals = [
    { city: 'Rome', country: 'IT' },
    { city: 'Paris', country: 'FR' },
    { city: 'London', country: 'GB' },
    { city: 'Berlin', country: 'DE' },
    { city: 'Tokyo', country: 'JP' },
    // Volendo si possono aggiungere altre capitali
];

router.get('/all-capitals', async (req, res) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    console.log('API Key:', apiKey); // Verifica che la chiave venga letta

    try {
        const weatherData = await Promise.all(
            capitals.map(async ({ city, country }) => {
                try {
                    const response = await axios.get(
                        'https://api.openweathermap.org/data/2.5/weather',
                        {
                            params: {
                                q: `${city},${country}`,
                                appid: apiKey,
                                units: 'metric',
                                lang: 'it'
                            }
                        }
                    );
                    return {
                        city,
                        country,
                        temp: response.data.main.temp,
                        condition: response.data.weather[0].description,
                        icon: response.data.weather[0].icon
                    };
                } catch (error) {
                    console.error(`Errore API per ${city}:`, error.response?.data || error.message);
                    return { city, country, error: true, message: error.response?.data?.message || error.message };
                }
            })
        );

        res.json(weatherData);
    } catch (err) {
        console.error('Errore generale:', err);
        res.status(500).json({ error: 'Errore nel recupero dei dati meteo' });
    }
});

module.exports = router;