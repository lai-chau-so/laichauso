import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherByCity.css"; // Import file CSS
import { Box, Text } from "zmp-ui";

const WeatherByCity: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const apiKey = "d13f6350d3cb432a878ccee4d4d52dc9"; // Thay YOUR_API_KEY bằng API key của bạn
    const city = "Lai Chau"; // Thay bằng tên thành phố hoặc địa điểm bạn muốn
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading weather data...</div>;
  }

  const weatherIcon = weatherData.data[0].weather.icon; // Mã biểu tượng thời tiết
  const temperature = weatherData.data[0].temp;
  const humidity = weatherData.data[0].rh;
  const windSpeed = weatherData.data[0].wind_spd;

  return (
    <Box className="bg-white p-4">
      <Text size="large" className="font-medium text-primary">
        Thời tiết Lai Châu
      </Text>
      <div className="weather-container">
        <div className="weather-info">
          <div className="weather-icon">
            <img
              src={`https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`}
              alt="Weather Icon"
            />
          </div>

          <div className="temperature-info">
            <img
              src="./docs/thoitiet/icon-temperature.png"
              alt="Temperature Icon"
            />
            <p className="temperature-text">{temperature}°C</p>
          </div>
          <div className="humidity-info">
            <img src="./docs/thoitiet/icon-humidity.png" alt="Humidity Icon" />
            <p className="humidity-text">{humidity}%</p>
          </div>
          <div className="wind-info">
            <img src="./docs/thoitiet/icon-wind.png" alt="Wind Icon" />
            <p className="wind-text">{windSpeed.toFixed(1)} m/s</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default WeatherByCity;
