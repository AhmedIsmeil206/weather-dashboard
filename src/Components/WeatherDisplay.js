import React, { Component } from 'react'
import axios from 'axios'
class WeatherDisplay extends Component {
    state = {
        temperature: null,
        humidity: null,
        description: null,
        loading: true
    };

    componentDidMount() {
        this.fetchWeatherData(this.props.city)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.city) {
            this.fetchWeatherData(this.props.city);
        }
    }

    fetchWeatherData = async (city) => {
        try {
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&windspeed=${city.windspeed}&current_weather=true`);
            const weather = response.data.current_weather;
            this.setState({
                temperature: weather.temperature,
                windspeed: weather.windspeed,
                loading: false
            })
        } catch (error) {
            console.log("Error while fetching the data of the weather :", error)
        }
    }
    render() {
        const { temperature, windspeed, loading } = this.state;
        if (loading) {
            return <div>Loading.......</div>
        }
        return (
            <div className='Weather-data'>
                <h2>Current Weather</h2>
                <p>Temperature: {temperature} °C</p>
                <p>windspeed: {windspeed}</p>
            </div>
        )
    }

}

export default WeatherDisplay
