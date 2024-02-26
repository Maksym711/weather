import React from 'react'
import './DaytimeTemperature.css'
import { mapCodesToImage } from '../helper/constants'

export default function DaytimeTemperature(props) {

    let src = mapCodesToImage[props.image]

    return (
    <div className='daytime-temperature'>
        <p className='date'>{props.date}</p>
        <img src={src} alt="weather" />
        <div className="temperature">
            <p className='min-temp'>{Math.round(props.min) > 0 ? '+' + Math.round(props.min) + '°' : Math.round(props.min) + '°'}</p>
            <p>...</p>
            <p className='max-temp'>{Math.round(props.max) > 0 ? '+' + Math.round(props.max) + '°' : Math.round(props.max) + '°'}</p>
        </div>
        <p className={props.description.length < 18 ? 'description' : 'description small'}>{props.description}</p>
    </div>
    )
}
