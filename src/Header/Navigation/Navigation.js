import React, { useContext } from 'react'
import './Navigation.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import WeatherContext from '../../helper/weatherContext'

export default function Navigation() {

    const navigate = useNavigate()
    const weatherContext = useContext(WeatherContext)

    const onClick = (e) => {
        e.preventDefault()
        navigate(`/weather-forecast/8days?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&city=${weatherContext.nameCity}`)
    }

    return (
        <>
            <nav>
                <ul className='navigation'>
                    <li><NavLink to={`/?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&city=${weatherContext.nameCity}`}>Weather Now</NavLink></li>
                    <li><NavLink onClick={onClick} to="/weather-forecast">Weather Forecast</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
