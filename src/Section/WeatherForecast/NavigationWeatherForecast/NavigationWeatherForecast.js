import React, { useContext } from 'react'
import './NavigationWeatherForecast.css'
import { NavLink } from 'react-router-dom'
import WeatherContext from '../../../helper/weatherContext'

export default function NavigationWeatherForecast() {

    const weatherContext = useContext(WeatherContext)

    return (
    <nav>
        <ul className='navigation-weather-forecast'>
            <li><NavLink to={`8days?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&city=${weatherContext.nameCity.toLowerCase()}`}>8 days</NavLink></li>
            <li><NavLink to={`12days?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&city=${weatherContext.nameCity.toLowerCase()}`}>12 days</NavLink></li>
            <li><NavLink to={`16days?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&city=${weatherContext.nameCity.toLowerCase()}`}>16 days</NavLink></li>
        </ul>
    </nav>
    )
}