import React from 'react';
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import SongList from '../components/SongList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

function Artist() {

  const { id } = useParams()

   const {name, banner} = artistArray.filter(
    
    (currentArtistObj, index) => currentArtistObj.id === Number(id),[0])
  
    const songsArrayArtist = songsArray.filter((currentSongObj)=> currentSongObj.artist == name)

  const randomIndex = math.floor(
    Math.random() * (songsArrayArtist.length - 1) 
  )
  
  const randomFromArtist = songsArrayArtist[randomIndex].id
  
  return (
    <div className='artist'>
      <div className="artist__header" style={{backgroundImage:
        `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})` }}>
          <h2 className='artist__title'>{name}</h2>
      </div>

        <div className="artist__body">
          <h2>Populares</h2>
          <div className="song-list">
            <SongList songsArray={songsArrayArtist}/>
          </div>
        </div>
          <Link to={`/songs/${randomFromArtist}`}>
            <FontAwesomeIcon className="single-item__icon single__icon--artist" icon={faCirclePlay} />
          </Link>
    </div>
  )
}

export default Artist;
