const express = require('express');
const axios = require('axios');
const router = express.Router();

const capitals = [
    { city: 'Rome', country: 'IT' },
    { city: 'Paris', country: 'FR' },
    { city: 'London', country: 'GB' },
    { city: 'Berlin', country: 'DE' },
    { city: 'Tokyo', country: 'JP' },
    { city: 'Buenos Aires', country: 'AR' },
    { city: 'Vienna', country: 'AT' },
    { city: 'Dublin', country: 'IE' },
];

router.get('/all-capitals', async (req, res) => {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const weatherData = await Promise.all(
            capitals.map(async ({ city, country }) => {
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

                const data = response.data;

                return {
                    city,
                    country,
                    temp: data.main.temp,
                    condition: data.weather[0].description,
                    icon: data.weather[0].icon,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    windSpeed: data.wind.speed,
                    visibility: data.visibility,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    coord: data.coord
                };
            })
        );

        res.json(weatherData);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Errore nel recupero dei dati meteo' });
    }
});

module.exports = router;