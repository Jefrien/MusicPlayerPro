import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AudioProvider } from "./context/AudioAppContext";
import { PlayerProvider } from "./context/PlayerContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <AudioProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </AudioProvider>
  </HashRouter>
);
