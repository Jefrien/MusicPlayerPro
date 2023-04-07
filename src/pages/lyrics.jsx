import { AnimationLayout } from "./../components/layout/AnimationLayout";
import { useEffect } from "react";
import { useLyrics } from "./../hooks/useLyrics";
import PerfectScrollbar from "react-perfect-scrollbar";

export const LyricsPage = () => {
  const { fetchLyrics, lyrics } = useLyrics();

  useEffect(() => {
    fetchLyrics();
  }, []);

  useEffect(() => {
    fetchLyrics();
  }, [window.amplitude.getActiveSongMetadata()]);

  return (
    <AnimationLayout>
     <div className="h-[88vh]">
     <PerfectScrollbar>
        <div className=" text-center text-2xl whitespace-pre-line dark:text-white py-6">
          {lyrics}
        </div>
      </PerfectScrollbar>
     </div>
    </AnimationLayout>
  );
};
