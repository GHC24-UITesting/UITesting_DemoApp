import React, { useState } from "react";
import {
  Button,
  Input,
  Spinner,
  Card,
  CardHeader,
  Image,
  LargeTitle,
  Title3,
  Text,
} from "@fluentui/react-components";
import {
  WeatherSunny24Regular,
  WeatherRain24Regular,
  WeatherSnow24Regular,
  WeatherCloudy24Regular,
  WeatherFog24Regular,
  WeatherPartlyCloudyDay24Regular,
  ArrowUp24Regular,
  ArrowDown24Regular,
  ArrowLeft24Regular,
  ArrowRight24Regular,
} from "@fluentui/react-icons";
import axios from "axios";

interface WeatherCardProps {
    parent: "card" | "page";
}
const WeatherApp: React.FC<WeatherCardProps> = (props: WeatherCardProps) => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`http://api.weatherstack.com/current`, {
        params: {
          access_key: "dca71745f5f12f84d105e90893a4e602", // Replace with your Weatherstack API key
          query: city,
        },
      });
      const data = response.data;
      if (data?.error) {
        setError(data.error.info);
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError("Failed to fetch weather data.");
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Please enter a valid city name.");
      return;
    }
    fetchWeatherData();
  };

  const getWindDirectionIcon = (direction: string) => {
    switch (direction) {
      case "N":
        return <ArrowUp24Regular style={{ marginRight: "5px" }} />;
      case "S":
        return <ArrowDown24Regular style={{ marginRight: "5px" }} />;
      case "E":
        return <ArrowRight24Regular style={{ marginRight: "5px" }} />;
      case "W":
        return <ArrowLeft24Regular style={{ marginRight: "5px" }} />;
      case "NE":
        return (
          <ArrowUp24Regular
            style={{ marginRight: "5px", transform: "rotate(45deg)" }}
          />
        );
      case "SE":
        return (
          <ArrowDown24Regular
            style={{ marginRight: "5px", transform: "rotate(45deg)" }}
          />
        );
      case "SW":
        return (
          <ArrowDown24Regular
            style={{ marginRight: "5px", transform: "rotate(-45deg)" }}
          />
        );
      case "NW":
        return (
          <ArrowUp24Regular
            style={{ marginRight: "5px", transform: "rotate(-45deg)" }}
          />
        );
      default:
        return null;
    }
  };

    const isCard = props.parent === "card";
    const parentWidth = isCard ? '200px' : '300px';
    return (
        <div style={{ padding: '20px', maxWidth: parentWidth, margin: '0 auto' }}>
            {!isCard && (<LargeTitle>Weather</LargeTitle>)}

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <Input
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <Button type="submit" appearance="primary">Get Weather</Button>
            </form>
            {loading && <Spinner label="Loading..." />}
            {error && <Title3>{error}</Title3>}
            {weatherData && (
                <Card className="weather-card">
                    <CardHeader
                        header={<Text>{weatherData.location.name}, {weatherData.location.country}</Text>}
                        description={
                            <div>
                                <Text>{weatherData.current.weather_descriptions[0]}{" "}</Text>

                                {weatherData.current.weather_icons && weatherData.current.weather_icons.length > 0 && (
                                    <Image src={weatherData.current.weather_icons[0]} alt="Weather Icon" />
                                )}
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <WeatherSunny24Regular style={{ marginRight: '5px' }} />
                                    <Text>Temperature: {weatherData.current.temperature}°C</Text>
                                </div>
                                {!isCard && (<div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        {getWindDirectionIcon(weatherData.current.wind_dir)}
                                        <Text>Wind: {weatherData.current.wind_speed} km/h {weatherData.current.wind_dir}</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <WeatherRain24Regular style={{ marginRight: '5px' }} />
                                        <Text>Humidity: {weatherData.current.humidity}%</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <WeatherSnow24Regular style={{ marginRight: '5px' }} />
                                        <Text>Pressure: {weatherData.current.pressure} mb</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <WeatherFog24Regular style={{ marginRight: '5px' }} />
                                        <Text>Visibility: {weatherData.current.visibility} km</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <WeatherPartlyCloudyDay24Regular style={{ marginRight: '5px' }} />
                                        <Text>UV Index: {weatherData.current.uv_index}</Text>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                        <WeatherCloudy24Regular style={{ marginRight: '5px' }} />
                                        <Text>Cloud Cover: {weatherData.current.cloudcover}%</Text>
                                    </div>
                                </div>)}
                            </div>
                        }
                    />
                </Card>
            )}
        </div>
    );
};

export default WeatherApp;
