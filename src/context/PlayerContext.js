import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [dark, setDark] = useState(false);

  const updateTracks = (tracks) => {
    // get all artists
    let artists = tracks.map((track) => {
      return { artist: track.artist, path: track.path, picture: track.picture };
    });

    // remove duplicates
    let uniqueArtists = []
    for(let i = 0; i < artists.length; i++){
      let artist = artists[i]
      let exists = false
      for(let j = 0; j < uniqueArtists.length; j++){
        if(artist.artist === uniqueArtists[j].artist){
          exists = true
          break
        }
      }
      if(!exists){
        uniqueArtists.push(artist)
      }
    }
      

    setArtists(uniqueArtists);
    

    // get all albums
    let albums = tracks.map((track) => track.album);
    albums = [...new Set(albums)];
    setAlbums(albums);

    // update tracks
    setTracks(tracks);    
  };

  const getSingleArtist = (artist) => {
    let artistTracks = tracks.filter((track) => track.artist === artist);
    return artistTracks;
  }
  const getTracksByPath = (path) => {
    console.log(tracks)
    let artistTracks = tracks.filter((track) => track.folderPath === path);
    return artistTracks;
  }

  const getAllTracks = () => {
    return tracks;
  }

  const toggleDark = () => {
    setDark(!dark)
    if(!dark){
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
  }

  return (
    <PlayerContext.Provider
      value={{
        tracks,
        artists,
        albums,        
        updateTracks,
        getSingleArtist,
        getTracksByPath,
        dark,
        toggleDark,
        getAllTracks
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
