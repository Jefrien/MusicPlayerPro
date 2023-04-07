import { useEffect } from "react";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { AnimationLayout } from "../components/layout/AnimationLayout";

export const PlayingList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (window.amplitude.getActivePlaylist()) {
      console.log("Active Playlist: ", window.amplitude.getActivePlaylist());
      let songs = window.amplitude.getSongsInPlaylist(
        window.amplitude.getActivePlaylist()
      );
      if (songs.length > 0) {
        setSongs(songs);
      }
    }
  }, []);

  useEffect(() => {
    console.log("changes");
    // smoth scroll to active class
    const activeSong = document.querySelector(".activeSong");
    const scrollContainer = document.querySelector(".scroll-view");
    if (activeSong) {
      scrollContainer.scrollTo({
        top: activeSong.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [window.amplitude.getActiveSongMetadata()]);

  return (
    <AnimationLayout>
      <div className="flex flex-col w-full h-screen p-4 pb-20 text-black dark:text-white">
        <h2 className="font-bold tracking-widest uppercase text-gray-800 dark:text-white text-2xl mb-4">
          Lista de reproducción -{" "}
          {window.amplitude.getActiveSongMetadata().name}
        </h2>
        <PerfectScrollbar>
          <div className="pb-4 w-full scroll-view">
            <table className="table-auto text-left w-full">
              <thead className="bg-slate-300 dark:bg-white/10">
                <tr>
                  <th className="p-2 text-center">#</th>
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Artista</th>
                  <th className="p-2">Album</th>
                </tr>
              </thead>
              <tbody className="bg-slate-200 dark:bg-white/5">
                {songs.length > 0 &&
                  songs.map((song, index) => (
                    <tr
                      key={index}
                      className={
                        " cursor-pointer " +
                        (window.amplitude.getActiveSongMetadata().name ==
                        song.name
                          ? "bg-blue-600 text-white hover:bg-blue-500 dark:hover:bg-blue-500 activeSong"
                          : "hover:bg-black/5 dark:hover:bg-white/5")
                      }
                    >
                      <td className="p-2 text-center text-black/50 dark:text-white/50">
                        {index + 1}
                      </td>
                      <td className="p-2">{song.name}</td>
                      <td className="p-2">{song.artist}</td>
                      <td className="p-2">{song.album}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </PerfectScrollbar>
      </div>
    </AnimationLayout>
  );
};
