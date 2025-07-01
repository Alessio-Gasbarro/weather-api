import React from 'react';

function Footer() {
    return (
        <header className="site-footer">
            <div className="col-30">
                <h1>About</h1>
                <span>Piccolo progetto metereologico di ben 20 Capitali nel mondo!</span>
            </div>
            <div className="col-30">
                <span>©2025 PLUVIA24. All rights reserved.</span>
            </div>
            <div className="col-30">
                <h1>OpenWeather</h1>
                <span>Questo progetto utilizza ApiKey direttamente da OpenWeather!</span>
            </div>
        </header>
    );
}

export default Footer;