import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');
  const changeHandler = e => {
    setCity(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then(response => response.json())
      .then(data => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        console.log(celcius);
        setResult('Temperature at ' + city + '\n' + Math.round(celcius) + '°C');
         setCity('');

      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      <center>
        <h1>WEATHER APP </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="city"
            vslue={city}
            onChange={changeHandler}
          />
          <br />
          <br />
          <br />
          <input type="submit" value="Get Temperature" />
        </form>
        <h1>{result}</h1>
      </center>
    </div>
  );
}
