import React from 'react'
import './ErrorFetch.css'
import error_smile from '../images/error_smile.png'

export default function ErrorFetch() {
    return (
    <div className='error-fetch'>
        <img src={error_smile} alt="error" />
        <h2>Unable to get your location</h2>
    </div>
    )
}
