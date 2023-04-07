import { useContext, useEffect, useState } from "react";
import { PlayerContext } from './../context/PlayerContext';

export const useLibrary = () => {

  const { tracks, updateTracks }  = useContext(PlayerContext);

  const [library, setLibrary] = useState({ paths: [], tracks: [] });      
  const [loading, setLoading] = useState(true);
  const KEY = "library";

  const updateLibraryPath = async (path) => {
    const paths = library.paths;
    if (paths.includes(path)) return;
    paths.push(path);
    setLibrary({ ...library, paths });
    // update library path
    window.storage.setSync(KEY, library);
  };

  const updateLibraryTracks = async (tracks) => {
    updateTracks(tracks)    
    console.log(tracks)
  }

  const removePath = async (path) => {
    const paths = library.paths;
    const index = paths.indexOf(path);
    if (index > -1) {
      paths.splice(index, 1);
    }
    setLibrary({ ...library, paths });
    // update library path
    window.storage.setSync(KEY, library);
  };

  useEffect(() => {    
    // fetch library from storage
    let library = window.storage.getSync(KEY);
    console.log(library)
    if (library) {    
      setLibrary(library);              
    }
    setLoading(false);

    if(tracks.length === 0) {        
      window.ipcRenderer.send('refresh-library', library.paths);
      setLoading(true);
    }     

    window.ipcRenderer.on("refreshed-tracks", (event, tracks) => {
      console.log(tracks)
      updateLibraryTracks(tracks);
      setLoading(false);
    })

    // listen for library paths updates
    window.ipcRenderer.on("selected-directory", (event, path) => {
      if (path.canceled) return;
      console.log(path)
      updateLibraryPath(path.path);      
      //window.ipcRenderer.send('refresh-library', library.paths);      
    });
  }, ['']);

  return { library, loading, removePath, tracks };
};
