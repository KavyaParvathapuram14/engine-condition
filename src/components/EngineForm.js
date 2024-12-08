import React, { useState } from "react";

function EngineForm({ onCheckCondition }) {
  const [inputs, setInputs] = useState({
    rpm: 1000,
    lubOilPressure: 50,
    fuelPressure: 60,
    coolantPressure: 30,
    lubOilTemp: 90,
    coolantTemp: 100,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckCondition(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Engine RPM:
        <input
          type="number"
          name="rpm"
          value={inputs.rpm}
          onChange={handleChange}
          min="0"
        />
      </label>
      <label>
        Lubricant Oil Pressure (psi):
        <input
          type="number"
          name="lubOilPressure"
          value={inputs.lubOilPressure}
          onChange={handleChange}
          min="0"
        />
      </label>
      <label>
        Fuel Pressure (psi):
        <input
          type="number"
          name="fuelPressure"
          value={inputs.fuelPressure}
          onChange={handleChange}
          min="0"
        />
      </label>
      <label>
        Coolant Pressure (psi):
        <input
          type="number"
          name="coolantPressure"
          value={inputs.coolantPressure}
          onChange={handleChange}
          min="0"
        />
      </label>
      <label>
        Lubricant Oil Temperature (°C):
        <input
          type="number"
          name="lubOilTemp"
          value={inputs.lubOilTemp}
          onChange={handleChange}
          min="0"
        />
      </label>
      <label>
        Coolant Temperature (°C):
        <input
          type="number"
          name="coolantTemp"
          value={inputs.coolantTemp}
          onChange={handleChange}
          min="0"
        />
      </label>
      <button type="submit">Check Condition</button>
    </form>
  );
}

export default EngineForm;
