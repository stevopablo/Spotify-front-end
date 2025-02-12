import React from "react";
import { songsArray } from '../assets/database/songs'
import { artistArray } from '../assets/database/artists'
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      <ItemList
      title='Artistas'
      items={10}
      itemsArray={artistArray}
      path='/artist'
      idPath='/artist'
      />

    <ItemList
    title='Músicas'
    items={20}
    itemsArray={songsArray}
    path='/songs'
    idPath='/song'
    />
    </div>

  );
};

export default Main;
