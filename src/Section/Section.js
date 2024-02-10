import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Section.css'
import WeatherNow from './WeatherNow/WeatherNow'
import WeatherForecast from './WeatherForecast/WeatherForecast'
import Error404 from './Error404/Error404'
import EightDays from './WeatherForecast/ContentWeatherForecast/Days/EightDays'
import TwelveDays from './WeatherForecast/ContentWeatherForecast/Days/TwelveDays'
import SixteenDays from './WeatherForecast/ContentWeatherForecast/Days/SixteenDays'


export default function Section() {

    return (
      <section>
        <div className="section-content">
          <Routes>
            <Route path='/' element={<WeatherNow />} />
            <Route path='/weather-forecast' element={<WeatherForecast />}>
              <Route path='8days' element={<EightDays />} />
              <Route path='12days' element={<TwelveDays />} />
              <Route path='16days' element={<SixteenDays />} />
            </Route>
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </section>
    )
}
