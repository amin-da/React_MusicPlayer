import React from "react";

const LibrarySong = ({ songs, song, setCurrentSong, id }) => {
  const songSelectHandler = () => {
    // const selectedSongs = songs.filter((state) => state.id === id);
    // setCurrentSong(selectedSongs[0]);
    setCurrentSong(song);
  };

  return (
    <div className="library-song" onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name}></img>
      <div class="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
