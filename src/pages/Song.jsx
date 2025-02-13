import React from 'react'
import Player from '../components/Player'
import { useParams } from 'react-router-dom'
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
function Song() {
  const {id} = useParams()
  const {image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj.id === Number(id)
  ,[0])
    const artistObj = artistArray.filter(
      (curretArtistObj) => curretArtistObj.name === artist
    ,[0])

    const currentSongsFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artist
    )

    const randomIndex = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
  
    const randomIndex2 = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );

    const randomIdFromArtists = songsArrayFromArtist[randomIndex].id
    const randomId2FromArtists = songsArrayFromArtist[randomIndex2].id
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
               src={artistObj.image} alt={name} />
            </div>

            <div className="player">
              <Player
               duration={duration}
               randomIdFromArtist={randomIdFromArtists}
               randomId2FromArtist={randomId2FromArtists}
              />
            </div>

            <div className="song__name">
              <p>{name}</p>
              <p>{artist}</p>
            </div>

        </div>
    </div>
  )
}

export default Song