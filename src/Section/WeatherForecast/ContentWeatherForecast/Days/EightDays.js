import React from 'react'
import { useContext } from 'react'
import './EightDays.css'
import WeatherContext from '../../../../helper/weatherContext'
import DaytimeTemperature from '../../../../components/DaytimeTemperature'


export default function EightDays() {

  const weatherContext = useContext(WeatherContext)

  let arrEight = []

  if(weatherContext.weatherSixteenDays){
    arrEight = weatherContext.weatherSixteenDays.slice(0, 8)
  }

  return (
    <div className='eight-days'>
      {arrEight.map(item => <DaytimeTemperature date={item.valid_date} image={item.weather.icon} max={item.max_temp} min={item.min_temp} description={item.weather.description} />)}
    </div>
  )
}
