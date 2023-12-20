import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';

const AboutUs = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=5b926c4f7031b679461249a0294d5cd6'
        );

        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const temperature = weather.main?.temp ? Math.round(weather.main.temp - 273.15) : 'N/A';
  const conditions = weather.weather?.[0]?.description || 'N/A';

  return (
    <div className={`about-us-container ${loading ? 'fade-in' : ''}`}>
      <h1>About Me</h1>
      <p className="intro-text">
        My name is Zhahansha, and I am a 19-year-old student at International IT University.
      </p>

      <h2>Additional Information</h2>
      <table className="table table-bordered info-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Zhahansha</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Group</td>
            <td>IT2-2110</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>31539</td>
          </tr>
          <tr>
            <td>University</td>
            <td>International IT University</td>
          </tr>
        </tbody>
      </table>

      <div className="weather-box">
        <h2>Weather in Almaty</h2>
        {loading ? (
          <p className="loading-text">Loading weather data...</p>
        ) : (
          <p>
            Temperature: {temperature}°C, Conditions: {conditions}
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
