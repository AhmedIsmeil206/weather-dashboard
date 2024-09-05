import React, { Suspense, useState } from 'react';
import './App.css';

const WeatherDisplay = React.lazy(() => import('./Components/WeatherDisplay'));
const WeatherForecast = React.lazy(() => import('./Components/WeatherForecast.js'));
const CityForm = React.lazy(() => import('./Components/CityForm.js'));

const App = () => {
  const [city, setCity] = useState(null);

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <Suspense fallback={<div>Loading form...</div>}>
        <CityForm onCityChange={setCity} />
      </Suspense>
      {city && (
        <Suspense fallback={<div>Loading weather...</div>}>
          <WeatherDisplay city={city} />
          <WeatherForecast city={city} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
