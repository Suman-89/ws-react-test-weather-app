import React from "react";

export default function ToogleTempUnit({ tempUnit, setTempUnit }) {
  const toggleUnit = () => {
    setTempUnit(tempUnit === "metric" ? "imperial" : "metric");
  };

  return (
    <>
      <button onClick={toggleUnit} type="button" className="btn btn-warning">
        Toggle to {tempUnit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
    </>
  );
}
