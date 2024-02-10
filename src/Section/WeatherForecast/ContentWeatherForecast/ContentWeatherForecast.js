import React from 'react'
import { Outlet } from 'react-router-dom'
import './ContentWeatherForecast.css'


export default function ContentWeatherForecast() {
    return (
    <div className='content-weather-forecast'>
        <Outlet />
    </div>
    )
}
