import axios from 'axios';
import React, { useState } from 'react';

const WeatherApp: React.FC = () => {
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [weatherData, setWeatherData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeatherData = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://api.weatherstack.com/current`, {
                params: {
                    access_key: 'dca71745f5f12f84d105e90893a4e602', // Replace with your Weatherstack API key
                    query: city,
                }
            });
            const data = response.data;
            if (data) {
                setWeatherData(JSON.stringify(data));
            } else {
                setError('No weather data available for the selected date.');
            }
        } catch (err) {
            setError('Failed to fetch weather data.');
        }
        setLoading(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date (YYYY-MM-DD):</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Get Weather</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
           {weatherData}
        </div>
    );
};

export default WeatherApp;