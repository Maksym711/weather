import React from 'react'
import './DetailsTemperature.css'

export default function DetailsTemperature({property, data}) {
    return (
    <div className='details'>
        <p>{property}</p>
        <p className='data-details'>{data}</p>
    </div>
    )
}
