import React from 'react';
import { WiStrongWind, WiHumidity, WiSunrise, WiSunset, WiBarometer, WiDaySunny } from 'react-icons/wi';

function formatUnixTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function CapitalDetails({ data }) {
    if (!data) return null;

    return (
        <div className="capital-details">
            <div className="details-header">
                <div>
                    <h2>{data.city}, {data.country}</h2>
                    <p className="condition">{data.condition}</p>
                </div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
                    alt={data.condition}
                />
            </div>

            <div className="temp-main">
                <span className="temp">{Math.round(data.temp)}°C</span>
            </div>

            <div className="details-grid">
                <div className="detail-item">
                    <WiHumidity size={32} />
                    <p>Umidità</p>
                    <span>{data.humidity}%</span>
                </div>
                <div className="detail-item">
                    <WiBarometer size={32} />
                    <p>Pressione</p>
                    <span>{data.pressure} hPa</span>
                </div>
                <div className="detail-item">
                    <WiStrongWind size={32} />
                    <p>Vento</p>
                    <span>{data.windSpeed} m/s</span>
                </div>
                <div className="detail-item">
                    <WiDaySunny size={32} />
                    <p>Visibilità</p>
                    <span>{data.visibility / 1000} km</span>
                </div>
                <div className="detail-item">
                    <WiSunrise size={32} />
                    <p>Alba</p>
                    <span>{formatUnixTime(data.sunrise)}</span>
                </div>
                <div className="detail-item">
                    <WiSunset size={32} />
                    <p>Tramonto</p>
                    <span>{formatUnixTime(data.sunset)}</span>
                </div>
                <div className="detail-item coord">
                    <p>Coordinate</p>
                    <span>Lat: {data.coord.lat}</span>
                    <span>Lon: {data.coord.lon}</span>
                </div>
            </div>
        </div>
    );
}

export default CapitalDetails;