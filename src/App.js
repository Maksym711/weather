import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import WeatherContext from './helper/weatherContext';
import Header from './Header/Header';
import Section from './Section/Section';

function App() {

  const [latCity, setLatCity] = useState(null)
  const [lonCity, setLonCity] = useState(null)
  const [weatherData, setWeatherData] = useState([])
  const [nameCity, setNameCity] = useState('')
  const [weatherSixteenDays, setWeatherSixteenDays] = useState([])
  const [weatherHourly, setWeatherHourly] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  const data = {
    weatherData,
    setWeatherData,
    nameCity,
    setNameCity,
    weatherSixteenDays,
    setWeatherSixteenDays,
    weatherHourly,
    setWeatherHourly,
    isLoading,
    setLoading,
    isError,
    setError,
    latCity,
    setLatCity,
    lonCity,
    setLonCity
  }

  return (
    <div className="App">
      <BrowserRouter>
        <WeatherContext.Provider value={data}>
          <Header />
          <Section />
        </WeatherContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
