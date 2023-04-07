import React, { createContext, useState, useEffect } from "react";

export const AudioAppContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [playingState, setPlayingState] = useState("stopped");
  const [songCurrentTime, setCurrentTime] = useState(0);
  const [songDuration, setSongDuration] = useState(0);
  const [songProgress, setSongProgress] = useState(0);
  const [songData, setSongData] = useState({});
  const [shuffle, setShuffe] = useState(false);
  const [repeat, setRepeat] = useState(false);

  // player functions
  const playMusic = () => {
    window.amplitude.play();
    setPlayingState("playing");
  };

  const pauseMusic = () => {
    window.amplitude.pause();
    setPlayingState("paused");
  };

  const stopMusic = () => {
    window.amplitude.stop();
    setPlayingState("stopped");
  };

  const nextSong = () => {
    window.amplitude.next();
  };

  const prevSong = () => {
    window.amplitude.prev();
  };

  const setSongUserProgress = (progress) => {
    window.amplitude.setSongPlayedPercentage(progress);
  };

  const toggleSuffle = () => {
    let shuffle = window.amplitude.getShuffle();
    window.amplitude.setShuffle(!shuffle);
    let activePlaylist = window.amplitude.getActivePlaylist();
    window.amplitude.setShufflePlaylist(activePlaylist, !shuffle);
    setShuffe(!shuffle);
  };

  const toggleRepeat = () => {    
    window.amplitude.setRepeatSong(!repeat);
    setRepeat(!repeat);
  };

  const playPlaylist = (listName, tracksList) => {
    window.amplitude.addPlaylist(listName, {}, tracksList);
    window.amplitude.playPlaylistSongAtIndex(0, listName);
    setCurrentPlaylist(tracksList);
    setPlayingState("playing");
  };

  const playSongOnPlaylist = (listName, tracksList, index) => {
    window.amplitude.addPlaylist(listName, {}, tracksList);
    window.amplitude.playPlaylistSongAtIndex(index, listName);
    setCurrentPlaylist(tracksList);
    setPlayingState("playing");
  };

  const playPlaylistShuffle = (listName, tracksList) => {
    window.amplitude.addPlaylist(listName, {}, tracksList);
    window.amplitude.setShufflePlaylist(listName, true);
    window.amplitude.playPlaylistSongAtIndex(0, listName);
    setCurrentPlaylist(tracksList);
    setPlayingState("playing");
  };

  useEffect(() => {
    window.amplitude.init({
      songs: [],
    });

    window.amplitude.setDebug( true );

    const interval = setInterval(() => {
      // player state
      const playerState = window.amplitude.getPlayerState();
      setPlayingState(playerState);

      // playing time
      const playerTime = window.amplitude.getSongPlayedSeconds();
      setCurrentTime(playerTime);

      // song duration
      const songDuration = window.amplitude.getSongDuration();
      setSongDuration(songDuration);

      // song progress
      const songProgress = window.amplitude.getSongPlayedPercentage();
      setSongProgress(songProgress);

      // song data
      const songData = window.amplitude.getActiveSongMetadata();
      setSongData(songData);

      if (window.amplitude.getActivePlaylist()) {
        // shuffle
        const shuffle = window.amplitude.getShufflePlaylist(
          window.amplitude.getActivePlaylist()
        );
        setShuffe(shuffle);

        // repeat
        /*const repeat = window.amplitude.getRepeatPlaylist(
          window.amplitude.getActivePlaylist()
        );
        setRepeat(repeat);*/
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AudioAppContext.Provider
      value={{
        playPlaylist,
        playSongOnPlaylist,
        playPlaylistShuffle,
        currentPlaylist,
        playMusic,
        pauseMusic,
        stopMusic,
        nextSong,
        prevSong,
        setSongUserProgress,
        playingState,
        songCurrentTime,
        songDuration,
        songProgress,
        songData,
        shuffle,
        repeat,
        toggleSuffle,
        toggleRepeat,
      }}
    >
      {children}
    </AudioAppContext.Provider>
  );
};
