import { Routes, Route, useLocation } from "react-router-dom";
import { Settings } from "./pages/settings";
import { Home } from "./pages/home";
import { NavBar } from "./components/layout/Nav";
import { NotFound } from "./pages/not-found";
import { SinglePlaylist } from "./pages/playlists/single";
import { FloatingPlayer } from "./components/layout/FloatingPlayer";
import { useContext } from "react";
import { AudioAppContext } from "./context/AudioAppContext";

import { AnimatePresence } from "framer-motion";
import { PlayingList } from './pages/playingList';
import { LyricsPage } from './pages/lyrics';

function App() {
  const { shuffle, repeat } = useContext(AudioAppContext);

  const location = useLocation();

  return (
    <>
      <div className="flex justify-between overflow-hidden">
        <NavBar />
        
        <main className="flex-1 bg-gray-200 dark:bg-slate-800">
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/playlists/:type/:id" element={<SinglePlaylist />} />
              <Route path="/playingList" element={<PlayingList />} />
              <Route path="/lyrics" element={<LyricsPage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <FloatingPlayer />
      </div>
    </>
  );
}

export default App;
