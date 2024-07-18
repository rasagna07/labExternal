//src/components/WeatherComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Hyderabad");
    const [query, setQuery] = useState("");

    const apiKey = '50412f4100b9d3f6b5d366098e1732a6';

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                );
                setWeather(response.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };

        if (city) {
            fetchWeather();
        }
    }, [city, apiKey]); // Include apiKey in dependency array to ensure useEffect runs when apiKey or city changes

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(query);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter city"
                />
                <button type="submit">Get Weather</button>
            </form>

            {loading && <p>Loading weather...</p>}
            {error && <p>Error fetching weather: {error.message}</p>}
            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
