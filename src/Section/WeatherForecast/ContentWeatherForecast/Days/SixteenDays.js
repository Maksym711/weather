import React from 'react'
import { useContext } from 'react'
import './SixteenDays.css'
import WeatherContext from '../../../../helper/weatherContext'
import DaytimeTemperature from '../../../../components/DaytimeTemperature'


export default function SixteenDays() {

  const weatherContext = useContext(WeatherContext)

  return (
    <div className='sixteen-days'>
      {weatherContext.weatherSixteenDays.map(item => <DaytimeTemperature date={item.valid_date} image={item.weather.icon} max={item.max_temp} min={item.min_temp} description={item.weather.description} />)}
    </div>
  )
}