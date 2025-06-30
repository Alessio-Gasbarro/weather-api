import React from 'react';
import CapitalCard from './CapitalCard';
import CapitalDetails from './CapitalDetails';

function CapitalGrid({ data, onSelect, selectedCity, selectedData }) {
    const selectedIndex = data.findIndex(c => c.city === selectedCity);

    const topRow = data.slice(0, 6);
    const leftCol = data.slice(6, 10);
    const rightCol = data.slice(10, 14);
    const bottomRow = data.slice(14, 20);

    return (
        <div className="grid-container">
            <div className="top-row">
                {topRow.map(capital => (
                    <CapitalCard
                        key={capital.city}
                        data={capital}
                        isSelected={capital.city === selectedCity}
                        onClick={() => onSelect(capital.city === selectedCity ? null : capital)}
                    />
                ))}
            </div>

            <div className="center-row">
                <div className="side-column">
                    {leftCol.map(capital => (
                        <CapitalCard
                            key={capital.city}
                            data={capital}
                            isSelected={capital.city === selectedCity}
                            onClick={() => onSelect(capital.city === selectedCity ? null : capital)}
                        />
                    ))}
                </div>

                <div className="center-card">
                    {selectedData && <CapitalDetails data={selectedData} />}
                </div>

                <div className="side-column2">
                    {rightCol.map(capital => (
                        <CapitalCard
                            key={capital.city}
                            data={capital}
                            isSelected={capital.city === selectedCity}
                            onClick={() => onSelect(capital.city === selectedCity ? null : capital)}
                        />
                    ))}
                </div>
            </div>

            <div className="bottom-row">
                {bottomRow.map(capital => (
                    <CapitalCard
                        key={capital.city}
                        data={capital}
                        isSelected={capital.city === selectedCity}
                        onClick={() => onSelect(capital.city === selectedCity ? null : capital)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CapitalGrid;