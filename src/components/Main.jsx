import React from "react";
import {songs} from '../assets/database/songs'
import {artists} from '../assets/database/artists'
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      <ItemList
      title='Artistas'
      items={10}
      itemsArray={artists}
      path='/artist'
      idPath='/artist'
      />

    <ItemList
    title='Músicas'
    items={20}
    itemsArray={songs}
    path='/songs'
    idPath='/song'
    />
    </div>

  );
};

export default Main;
