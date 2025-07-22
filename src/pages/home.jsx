import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../api/config";
import SearchPlace from "../components/searchPlace";
import ToogleTempUnit from "../components/toogleTempUnit";
import Weather from "../components/weather";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [tempUnit, setTempUnit] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // console.log(weatherData)
  const fetchWeatherDetails = async () => {
    setError("");
    try {
      const response = await axios
        .get(`${BASE_URL}?q=${cityName}&units=${tempUnit}&appid=${API_KEY}`)
        .then((res) => {
          // console.log(res)
          setWeatherData(res.data);
        });
    } catch (error) {
      //   console.log(error);
      setError("Sorry ! No City found !!");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    if (cityName) {
      fetchWeatherDetails();
    }
  }, [tempUnit]);

  return (
    <>
    <div className="opacity-75 my-4">
      <div className="card my-4">
        <div className="card-body">
          <h2 className="display-5">My Weather App</h2>
          <SearchPlace
            onSearch={fetchWeatherDetails}
            setCityName={setCityName}
          />
          <ToogleTempUnit tempUnit={tempUnit} setTempUnit={setTempUnit} />
          {error && (
            <div className="card my-4">
              <div className="card-body">
                <div className="alert alert-light" role="alert">
                  {error}
                </div>
              </div>
            </div>
          )}
          {weatherData && (
            <div className="card my-4">
              <div className="card-body">
                <Weather weatherData={weatherData} tempUnit={tempUnit} />
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
