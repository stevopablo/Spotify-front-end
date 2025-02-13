import React from 'react'
import Player from '../components/Player'

function Song() {
  return (
    <div className='song'>
        <div className="song__container">
          <div className="song__image__container">
            <img src="" alt="" />
          </div>
        </div>
        <div className="song__bar">

            <div className="song__artist-image">
              <img
               width={75}
               height={75}
               src="" alt="" />
            </div>

            <div className="player">
              <Player/>
            </div>

            <div className="">
              <p>musica</p>
              <p>artista</p>
            </div>

        </div>
    </div>
  )
}

export default Song