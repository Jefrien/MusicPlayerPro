import { AnimationLayout } from "./../../components/layout/AnimationLayout";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "./../../context/PlayerContext";
import { useEffect } from "react";
import { useState } from "react";
import { DotsIcon, PlayIcon, PlaylistsIcon } from "../../components/ui/Icon";
import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";
import { AudioAppContext } from "./../../context/AudioAppContext";
import { SingleBanner } from "../../components/sections/singleList/banner";
import { getAmplitudeMapSong, getPlayListName, getPlayListNameKey } from "../../utils/playlistFunctions";

export const SinglePlaylist = () => {
  const { getSingleArtist, getTracksByPath, getAllTracks } = useContext(PlayerContext);
  const { playPlaylist, playSongOnPlaylist, playPlaylistShuffle } = useContext(AudioAppContext);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistNameKey, setPlaylistNameKey] = useState("");

  const [tracks, setTracks] = useState([]);
  const [tracksUrl, setTracksUrl] = useState([]);  
  const [imageBanner, setImageBanner] = useState("");

  let { type, id } = useParams();

  const playSongInPlaylist = (index) => { 
    playSongOnPlaylist(playlistNameKey, tracksUrl, index);
  };

  const handleAllPlay = mode => {
    if(mode == 'normal') {
      playPlaylist(playlistNameKey, tracksUrl)
    }
    if(mode == 'shuffle') {
      playPlaylistShuffle(playlistNameKey, tracksUrl)
    }
  }

  useEffect(() => {
    let tracks = [];
    if (type === "artist") {
      tracks = getSingleArtist(id);
    }
    if (type === "folder") {
      // decode base64 usign buffer
      const path = Buffer.from(id, "base64").toString("ascii");      
      tracks = getTracksByPath(path);
      setTracks(tracks);
    }
    if(type === "all") {
      tracks = getAllTracks();
    }
    setTracks(tracks);

    const tracks_url = tracks.map(getAmplitudeMapSong);

    setTracksUrl(tracks_url);

    if (tracks[0] && tracks[0].picture) {
      setImageBanner(tracks[0].picture);
      let pname = getPlayListName(type, id, tracks[0])
      setPlaylistName(pname);
      let pkey = getPlayListNameKey(type, id, tracks[0])
      setPlaylistNameKey(pkey)
    }
  }, [type, id]);

  return (
    <AnimationLayout>
      <div className="overflow-hidden">
       <SingleBanner imageSrc={imageBanner} playListName={playlistName} onPlay={handleAllPlay} />
        <PerfectScrollbar>
          <div className="p-4 relative single-heigth block pb-60">
            {tracks.map((track, index) => (
              <div
                key={index}
                onClick={() => playSongInPlaylist(index)}
                className="bg-transparent rounded-xl  overflow-hidden hover:bg-gray-300/60 dark:hover:bg-gray-300/5 cursor-pointer  hover:border-blue-600 transition-all flex items-center justify-between px-2 py-0 mb-1 pr-6 group"
              >
                <div className="flex item-center">
                  <div className="flex items-center justify-center w-16 text-gray-600 text-lg -ml-2 h-16">
                    <span className="group-hover:hidden dark:text-gray-400">
                      {index + 1}
                    </span>
                    <PlayIcon className="w-5 h-5 hidden group-hover:inline-block dark:text-gray-400" />
                  </div>
                  <div className="w-16 h-12 inline-block mt-2 bg-black">
                    <img
                      src={track.picture}
                      alt=""
                      className=" object-cover w-full h-full"
                    />
                  </div>
                  <span className="px-2 text-ellipsis overflow-hidden whitespace-nowrap w-full flex items-start justify-center flex-col">
                    <div className="hover:underline dark:text-gray-100">
                      {track.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 hover:underline hover:text-gray-800">
                      {track.artist}
                    </div>
                  </span>
                </div>
                <button className="opacity-0 group-hover:opacity-100 dark:text-white">
                  <DotsIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </AnimationLayout>
  );
};
