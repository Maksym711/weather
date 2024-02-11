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
            fetchData(getCurrentWeatherDailyUrl(weatherContext.latCity, weatherContext.lonCity))
                .then(({data}) => weatherContext.setWeatherSixteenDays(data))
                .catch(() => weatherContext.setError(true))
                .finally(() => weatherContext.setLoading(false))
        }
    }, [weatherContext.latCity, weatherContext.lonCity])

    return (
    <div className='weather-forecast'>
        <NavigationWeatherForecast />
        <ContentWeatherForecast />
    </div>
    )
}
