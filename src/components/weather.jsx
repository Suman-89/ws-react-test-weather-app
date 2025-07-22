import React from "react";

export default function Weather({weatherData, tempUnit}) {
  return (
    <>
      <div className="card my-4" style={{width: '18rem'}}>
        <div className="card-header">{weatherData.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Weather Condition -</strong> {weatherData.weather[0].main} - {weatherData.weather[0].description}</li>
          <li className="list-group-item"><p className="card-text"><strong>Temperature -</strong> {weatherData.main.temp} &deg; {tempUnit === 'metric' ? 'C' : 'F'}</p></li>
          <li className="list-group-item"><strong>Humidity -</strong> {weatherData.main.humidity}%</li>
        </ul>
      </div>
    </>
  );
}
