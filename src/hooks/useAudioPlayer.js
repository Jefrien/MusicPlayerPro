import { useState } from 'react';
import { useEffect } from 'react';

export const useAudioPlayer = () => {

    const [tracksList, setTracksList] = useState([])

    const playPlaylist = (listName, tracksList) => {
        
        window.window.amplitude.addPlaylist( listName, {}, tracksList  );
        window.amplitude.playPlaylistSongAtIndex( 0, listName )
        setTracksList(tracksList)
    }

    const playSongOnPlaylist = (listName, tracksList, index) => {
        window.amplitude.addPlaylist( listName, {}, tracksList  );
        window.amplitude.playPlaylistSongAtIndex( index, listName )
        setTracksList(tracksList)
    }

    const playPlaylistShuffle = (listName, tracksList) => {
        window.amplitude.addPlaylist( listName, {}, tracksList  );
        window.amplitude.setShufflePlaylist( listName, true )
        window.amplitude.playPlaylistSongAtIndex( 0, listName )
        setTracksList(tracksList)
    }

    useEffect(() => {
        
        window.amplitude.init({
            "songs": []
        })

    }, [])

    return {
        playPlaylist,
        playSongOnPlaylist,
        playPlaylistShuffle,
        tracksList,        
    }
}