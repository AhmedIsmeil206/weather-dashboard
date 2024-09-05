import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ForecastDay from './ForecastDay'; // Make sure the path is correct

const WeatherForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForecastWeather = async () => {
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
        setForecast(response.data.daily);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching forecast data", error);
      }
    };

    fetchForecastWeather();
  }, [city]);

  if (loading) {
    return <div>Loading..... </div>;
  }

  return (
    <div>
      <h2>7 Days Forecast</h2>
      <div className="forecast-container">
        {forecast.time.map((day, index) => (
          <ForecastDay
            key={index}
            day={new Date(day).toLocaleDateString('en-US', { weekday: 'long' })}
            maxTemp={forecast.temperature_2m_max[index]}
            minTemp={forecast.temperature_2m_min[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
