import React, { useContext } from 'react'
import WeatherContext from '../../../helper/weatherContext'
import './Weather.css'
import { mapCodesToImage } from '../../../helper/constants'
import DetailsTemperature from '../../../components/DetailsTemperature'

export default function Weather() {

    const weatherContext = useContext(WeatherContext) 
    const data = weatherContext.weatherData[0]
    let srcWeather

    if(data){
        srcWeather = mapCodesToImage[data.weather.icon]
    }

    
    
    return (
        <>
        {data && (
            <div className='weather'>
                <div className="weather-now">
                    <div className="temperature">
                        <span className='sign'>{Math.round(data.temp) !== 0 ? (Math.round(data.temp) > 0 ? '+' : '−') : ''}</span>
                        <h1>{Math.round(Math.abs(data.temp))}°</h1>
                    </div>
                    <img src={srcWeather} alt={data.weather.icon} />
                </div>
                <div className="description">
                    <h4>{weatherContext.nameCity}: {data.weather.description.toLowerCase()}</h4>
                </div>
                <DetailsTemperature property='It feels like:' data={Math.round(data.app_temp) + '°'} />
                <DetailsTemperature property='Pressure:' data={Math.round(data.pres * 0.75) + ' mm'} />
                <DetailsTemperature property='Humidity:' data={data.rh + ' %'} />
                <DetailsTemperature property='Wind:' data={Math.round(data.wind_spd) + ' m/s'} />
                <DetailsTemperature property='Probability of precipitation:' data={data.precip + ' %'} />
                <DetailsTemperature property='Visibility:' data={data.vis + ' km'} />
            </div>
        )}
        </>
    )
}
