import React from 'react';

function CapitalList({ data }) {
    return (
        <div className="capital-list">
            {data.map((cap, index) => (
                <div className="capital-card" key={index}>
                    <h3>{cap.city}, {cap.country}</h3>
                    <img
                        src={`https://openweathermap.org/img/wn/${cap.icon}@2x.png`}
                        alt={cap.condition}
                    />
                    <p>{cap.temp}°C</p>
                    <p>{cap.condition}</p>
                </div>
            ))}
        </div>
    );
}

export default CapitalList;