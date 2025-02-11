import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from "@fortawesome/free-regular-svg-icons"
function Main() {
  return (
    <div className='main'>

      <div className='item-list'>
        <div className='item-list__header'>
        <h2>Artistas populares</h2>
        <a className='item-list__link' href="/">
          Mostrar tudo
        </a>
        </div >

      <div className='item-list__container'>


        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>

        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>

        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>

        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>

        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>

        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>
        <div className='single-item'>
          <div className='single-item__div-image-button'>

          <div className='single-item__div-image'>
          <img
           className='single-item__image'
           src="https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25"
           alt="imagem do artista"
           />
           </div>

          <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
           </div>


          <div className='single-item__texts'>
          <p className='single-item__title'>Marília Mendonça</p>
          <p className='single-item__type'>artista</p>
          </div>

        </div>

        </div>
      {/* change to 2  lines */}
      {/* container */}
    </div>
    </div>
  )
}

export default Main