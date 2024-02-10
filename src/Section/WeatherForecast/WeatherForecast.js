import React, { useContext, useEffect } from 'react'
import './WeatherForecast.css'
import NavigationWeatherForecast from './NavigationWeatherForecast/NavigationWeatherForecast'
import ContentWeatherForecast from './ContentWeatherForecast/ContentWeatherForecast'
import WeatherContext from '../../helper/weatherContext'
import { getCurrentWeatherDailyUrl } from '../../helper/apiWeather'
import fetchData from '../../helper/fetchData'

export default function WeatherForecast() {

    const weatherContext = useContext(WeatherContext)

    useEffect(() => {
        if(weatherContext.latCity && weatherContext.lonCity){
            weatherContext.setLoading(true)

            // getCurrentWeatherDaily(weatherContext.latCity, weatherContext.lonCity, weatherContext.setWeatherSixteenDays, weatherContext.setLoading, weatherContext.setError)

            fetchData(getCurrentWeatherDailyUrl(weatherContext.latCity, weatherContext.lonCity))
                .then(({data}) => weatherContext.setWeatherSixteenDays(data))
                .catch(() => weatherContext.setError(true))
                .finally(() => weatherContext.setLoading(false))

            // fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&key=c2d3c64087e54d018cae06444bf6a848`)
            // .then(data => data.json())
            // .then(data => {
            //     weatherContext.setWeatherSixteenDays(data.data)
            //     weatherContext.setLoading(false)
            // })
            // .catch(() => {
            //     weatherContext.setLoading(false)
            //     weatherContext.setError(true)
            // })
        }
    }, [weatherContext.latCity, weatherContext.lonCity])

    return (
    <div className='weather-forecast'>
        <NavigationWeatherForecast />
        <ContentWeatherForecast />
    </div>
    )
}
