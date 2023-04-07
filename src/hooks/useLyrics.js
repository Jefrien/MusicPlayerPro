import { useEffect, useState } from "react";
import axios from "axios";

export const useLyrics = () => {
  const [lyrics, setLyrics] = useState("");
  const [lyricsLoading, setLyricsLoading] = useState(false);
  const [lyricsError, setLyricsError] = useState(false);

  const fetchLyrics = async () => {
    setLyricsLoading(true);
    setLyricsError(false);
    try {
      const activeSong = window.amplitude.getActiveSongMetadata();
      const dataSend = {
        title: activeSong.name,
        artist: activeSong.artist,
      };

      // send as base64 to avoid problems with special characters enconded url
      // encode to url
      const encodedData = Buffer.from(
        encodeURIComponent(JSON.stringify(dataSend))
      ).toString("base64");

      const res = await axios.get(
        `http://localhost:3312/lyrics/${encodedData}`
      );
      console.log(res);
      setLyrics(res.data.lyrics);
      setLyricsLoading(false);
    } catch (error) {
      setLyricsError(true);
      setLyricsLoading(false);
    }
  };

  return { lyrics, lyricsLoading, lyricsError, fetchLyrics };
};
