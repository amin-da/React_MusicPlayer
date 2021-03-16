//cehck if the song is playing?
export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromis = audioRef.current.play();
    if (playPromis !== undefined) {
      playPromis.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
