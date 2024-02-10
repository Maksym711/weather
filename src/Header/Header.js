import React from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import InputSearch from './Input/InputSearch'
import Navigation from './Navigation/Navigation'

export default function Header() {

    return (
        <header>
            <div className="header-content">
                <div className="top-block">
                    <Logo />
                    <InputSearch />
                </div>
                <Navigation />
            </div>
        </header>
    )
}
