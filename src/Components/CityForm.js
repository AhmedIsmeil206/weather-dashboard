import axios from 'axios';
import React, { useState } from 'react';

const CityForm = ({ onCityChange }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (city.trim()) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=596d53e4af85efd7a693f97fa04cabd0`);
        const { lat, lon } = response.data[0];
        onCityChange({ latitude: lat, longitude: lon });
      } catch (error) {
        console.error("Error fetching geolocation data", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default CityForm;
