import React from 'react'
import './WeatherNow.css'
import Weather from './Weather/Weather'
import WeatherHourly from './WeatherHourly/WeatherHourly'


export default function WeatherNow() {

  return (
  <div className='weather-now-wrapper'>
    <Weather />
    <WeatherHourly />
  </div>
  )
}
