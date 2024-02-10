import React from 'react'
import './Error404.css'
import error404_icon from '../../images/error404_icon.png'

export default function Error404() {
    return (
    <div className='error'>
        <img src={error404_icon} alt="" />
        <h1>Error 404</h1>
    </div>
    )
}
