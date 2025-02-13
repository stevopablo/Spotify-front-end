import React from "react";
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
import ItemList from "./ItemList";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";

const Main = ({ type  }) => {
  return (
    <div className="main">
      {type  === 'artists' || type === undefined ? <ItemList
      title='Artistas'
      items={10}
      itemsArray={artistArray}
      path='/artist'
      idPath='/artist'
      /> : <></>
    }

    {type === 'songs' || type == undefined ?<ItemList
    title='Músicas'
    items={20}
    itemsArray={songsArray}
    path='/songs'
    idPath='/song'
    /> : <>
    </>}
   
    </div>

  );
};

export default Main;
