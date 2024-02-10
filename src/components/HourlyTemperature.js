import React from 'react'
import './HourlyTemperature.css'
import { mapCodesToImage } from '../helper/constants'
import humidity_icon from '../images/humidity_icon.png'
import precipitation_icon from '../images/precipitation_icon.png'
import wind_icon from '../images/wind_icon.jpg'


export default function HourlyTemperature(props) {

    let src = mapCodesToImage[props.image]

    return (
    <div className='hourly-temperature'>
        <p className='date'>{props.date}</p>
        <p className='hour'>{props.hour}</p>
        <img src={src} alt="weather" />
        <h1 className='temperature'>{props.temperature}</h1>
        <p className='description'>{props.description}</p>
        <div className="details">
            <div className="humidity">
                <img src={humidity_icon} alt="" />
                <p>{props.humidity}</p>
            </div>
            <div className="precipitation">
                <img src={precipitation_icon} alt="" />
                <p>{props.precipitation}</p>
            </div>
            <div className="wind">
                <img src={wind_icon} alt="" />
                <p>{props.wind}</p>
            </div>
        </div>
    </div>
    )
}
