import {
  BackIcon,
  PlayIcon,
  NextIcon,
  RepeatIcon,
  ShuffleIcon,
  ListIcon,
  PlaylistsIcon,
  MicIcon,
} from "../ui/Icon";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useContext } from "react";
import { AudioAppContext } from "./../../context/AudioAppContext";
import { PauseIcon } from "./../ui/Icon";
import { formatTime } from "./../../utils/timeFunctions";
import { NavLink } from 'react-router-dom';

export const FloatingPlayer = () => {
  const {
    playingState,
    songCurrentTime,
    songDuration,
    pauseMusic,
    playMusic,
    nextSong,
    prevSong,
    songProgress,
    setSongUserProgress,
    songData,
    toggleSuffle,
    toggleRepeat,
    repeat,
    shuffle,
  } = useContext(AudioAppContext);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen z-10">
        <div className="bg-white dark:bg-slate-900 rounded py-2 shadow-xl border border-gray-200 dark:border-gray-700/50 grid grid-cols-3">
          <div
            className={
              "flex items-center justify-start pl-3 flex-auto " +
              (playingState === "playing" ? "" : "opacity-0")
            }
          >
            <img
              src={songData.cover_art_url || "/default.jpg"}
              alt=""
              className="w-12 h-12"
            />
            <div className="flex flex-col ml-2">
              <span className="text-sm text-gray-600 dark:text-gray-100">
                {songData.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {songData.artist}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col flex-auto">
            <div className="flex items-center justify-center">
              <button
                onClick={toggleSuffle}
                className={
                  "text-black dark:text-white text-base w-10 h-10 inline-flex justify-center items-center bg-blue-600/0 hover:bg-blue-20 dark:bg-white/0 dark:hover:bg-white/20 rounded-full " +
                  (shuffle ? "text-blue-500 dark:text-blue-500" : "")
                }
              >
                <ShuffleIcon className="w-6 h-6" />
              </button>
              <button
                onClick={prevSong}
                className="text-black ml-2 dark:text-white text-base w-10 h-10 inline-flex justify-center items-center bg-blue-600/5 hover:bg-blue-30 dark:bg-white/10 dark:hover:bg-white/30 rounded-full"
              >
                <BackIcon className="w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  playingState === "playing" ? pauseMusic() : playMusic()
                }
                className="w-10 h-10 bg-blue-600 inline-flex items-center justify-center text-white rounded-full mx-3 hover:bg-blue-500 transition-colors amplitude-pause"
              >
                {playingState === "playing" ? (
                  <PauseIcon className="w-8 h-8" />
                ) : (
                  <PlayIcon className="w-8 h-8" />
                )}
              </button>
              <button
                onClick={nextSong}
                className="text-black mr-2 dark:text-white text-base w-10 h-10 inline-flex justify-center items-center bg-blue-600/5 hover:bg-blue-30 dark:bg-white/10 dark:hover:bg-white/30 rounded-full"
              >
                <NextIcon className="w-6 h-6" />
              </button>
              <button
                onClick={toggleRepeat}
                className={
                  "text-black dark:text-white text-base w-10 h-10 inline-flex justify-center items-center bg-blue-600/0 hover:bg-blue-20 dark:bg-white/0 dark:hover:bg-white/20 rounded-full " +
                  (repeat ? "text-blue-500 dark:text-blue-500" : "")
                }
              >
                <RepeatIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="w-96 pt-1 pb-0 flex items-center dark:text-white text-xs">
              <span>{formatTime(songCurrentTime)}</span>
              <RangeSlider
                defaultValue={[0, 0]}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                value={[isNaN(songProgress) ? 0 : songProgress, 0]}
                min="0"
                max="100"
                className="w-full single-thumb mx-2 -mb-[2px]"
                onInput={(e) => setSongUserProgress(e.pop())}
              />
              <span>{formatTime(songDuration)}</span>
            </div>
          </div>
          <div className="flex items-center justify-end pr-6">
            <NavLink to={'/lyrics'} type="button" className="text-black dark:text-white text-base w-12 h-12 inline-flex justify-center items-center transition-colors bg-blue-600/0 hover:bg-blue-500 hover:text-white rounded-full">
              <MicIcon className="w-7 h-7" />
            </NavLink>
            <NavLink to={'/playingList'} type="button" className="text-black ml-2 dark:text-white text-base w-12 h-12 inline-flex justify-center items-center transition-colors bg-blue-600/0 hover:bg-blue-500 hover:text-white rounded-full">
              <ListIcon className="w-7 h-7" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
