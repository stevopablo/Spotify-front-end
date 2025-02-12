import React from 'react'
import logoSpotify from '../assets/spotify-logo.png'

function Header() {
  return (
    <div className='header'>
        
        <img src={logoSpotify} alt="logoSpotify" />

        <a className='header__link' href="/">
        <h1>Spotify</h1>
        </a>

    </div>
  )
}

export default Header