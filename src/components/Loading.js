import React from 'react'
import './Loading.css'

export default function Loading() {
    return (
    <div className='loading'>
        <div className="lds-grid">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <h2>Weather loading</h2>
    </div>
    )
}
