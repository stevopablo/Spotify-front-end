import React from 'react'
import { Link } from "react-router-dom";
function SingleItem({id, name, image, banner, artist, idPath}) {
  return (
      <Link to={`${idPath}/${id}`} className="single-item">
                <div className="single-item__div-image-button">
                  <div className="single-item__div-image">
                    <img
                      className="single-item__image"
                      src={image}
                      alt={name}
                    />
                  </div>
    
                  <FontAwesomeIcon
                    className="single-item__icon "
                    icon={faCirclePlay}
                  />
                </div>
    
                <div className="single-item__texts">
                  <div className="single-item__2lines">
                    <p className="single-item__title">
                      {title}
                    </p>
                  </div>
    
                  <p className="single-item__type">{artist?? "Artista"}</p>
                </div>
        </Link>
  )
}

export default SingleItem