import React from 'react';

const ForecastDay = ({ day, minTemp, maxTemp }) => {
  return (
    <div className="forecast-day">
      <h3>{day}</h3>
      <p>Max: {maxTemp} °C</p>
      <p>Min: {minTemp} °C</p>
    </div>
  );
};

export default ForecastDay;
