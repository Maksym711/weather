import React, { useContext } from 'react'
import './WeatherHourly.css'
import WeatherContext from '../../../helper/weatherContext'
import HourlyTemperature from '../../../components/HourlyTemperature'

export default function WeatherHourly() {

    const weatherContext = useContext(WeatherContext)

    let reducedArrayWeatherHourly = []

    if(weatherContext.weatherHourly){
        reducedArrayWeatherHourly = weatherContext.weatherHourly.slice(0,24)
    }

    return (
    <div className='weather-hourly'>
        {reducedArrayWeatherHourly.map((item, index) => <HourlyTemperature
            key={index} 
            date={item.timestamp_local.split('T')[0]} 
            hour={(item.timestamp_local.split('T')[1]).split(':').slice(0,2).join(':')}
            image={item.weather.icon} 
            description={item.weather.description} 
            temperature={(Math.round(item.temp) > 0 ? '+' + Math.round(item.temp) : Math.round(item.temp)) + '°'}
            humidity={item.rh + ' %'}
            precipitation={Math.round(item.precip) + ' mm'}
            wind={Math.round(item.wind_spd) + ' m/s'}
        />)}
    </div>
    )
}
