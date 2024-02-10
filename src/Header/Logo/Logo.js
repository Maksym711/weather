import React, { useContext } from 'react'
import './Logo.css'
import { Link} from 'react-router-dom'
import WeatherContext from '../../helper/weatherContext'

export default function Logo() {

    const weatherContext = useContext(WeatherContext)

return (
<div className='logo'>
    <Link to={`/?lat=${weatherContext.latCity}&lon=${weatherContext.lonCity}&city=${weatherContext.nameCity}`}>WeatherWatch</Link>
</div>
)
}
