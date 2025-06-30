import React from 'react';

function CapitalCard({ data, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`capital-card ${isSelected ? 'selected' : ''}`}
        >
            <img
                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                alt={data.condition}
            />
            <h3>{data.city}</h3>
            <p>{Math.round(data.temp)}°C</p>
            <p>{data.condition}</p>
        </div>
    );
}

export default CapitalCard;