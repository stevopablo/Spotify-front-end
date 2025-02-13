import React from 'react'
import logoSpotify from '../assets/spotify-logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to={'/'}>
        <img src={logoSpotify} alt="logoSpotify" />
        </Link>

        <a className='header__link' href="/">
        <h1>Spotify</h1>
        </a>

    </div>
  )
}

export default Header