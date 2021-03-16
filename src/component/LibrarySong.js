import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  songs,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    // const selectedSongs = songs.filter((state) => state.id === id);
    // setCurrentSong(selectedSongs[0]);
    setCurrentSong(song);
    //add Actice States
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  //cehck if the song is playing?
  playAudio(isPlaying, audioRef);

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div class="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
