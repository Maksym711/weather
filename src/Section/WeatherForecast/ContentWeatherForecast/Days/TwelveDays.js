import React from 'react'
import { useContext } from 'react'
import './TwelveDays.css'
import WeatherContext from '../../../../helper/weatherContext'
import DaytimeTemperature from '../../../../components/DaytimeTemperature'


export default function TwelveDays() {

  const weatherContext = useContext(WeatherContext)

  let arrTwelve = []

  if(weatherContext.weatherSixteenDays){
    arrTwelve = weatherContext.weatherSixteenDays.slice(0, 12)
  }

  return (
    <div className='twelve-days'>
      {arrTwelve.map(item => <DaytimeTemperature date={item.valid_date} image={item.weather.icon} max={item.max_temp} min={item.min_temp} description={item.weather.description} />)}
    </div>
  )
}
