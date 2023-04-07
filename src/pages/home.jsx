import { useLibrary } from "../hooks/useLibrary";
import { OverlayLoader } from "./../components/ui/OverlayLoader";
import { AnimationLayout } from "./../components/layout/AnimationLayout";
import { useNavigate } from "react-router-dom";


import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { ArtistsCarrousel } from "../components/sections/artistsCarrousel";
import { FolderIcon, PlaylistsIcon } from "../components/ui/Icon";

export const Home = () => {
  const { loading, library } = useLibrary();
  const navigate = useNavigate();

  const toBase64 = (str) => {
    return Buffer.from(str).toString('base64')
  }


  return (
    <AnimationLayout>
      <div className="p-4 relative h-screen overflow-y-auto block w-screen pb-24">
        {loading && <OverlayLoader />}

        <h1 className="font-bold tracking-widest uppercase text-gray-500 text-2xl mb-4">
          Artistas
        </h1>

        <ArtistsCarrousel />

        <h1 className="mt-6 font-bold tracking-widest uppercase text-gray-500 text-2xl mb-4">
          Listas de reproducción
        </h1>

        <div className="slider-width">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={10}
            slidesPerView={5}
          >
            <SwiperSlide>
              <div 
              onClick={() => navigate('/playlists/all/all')}
              className="bg-white dark:bg-slate-900 dark:text-white dark:border-transparent rounded-md border overflow-hidden shadow-xl hover:bg-gray-100 dark:hover:bg-gray-500/20 dark:hover:border-gray-200/0 cursor-pointer hover:border-blue-600 transition-all">
                <div className=" h-28 flex items-center justify-center">
                  <PlaylistsIcon className=" w-14 h-14" />
                </div>
                <span className="px-2 pt-1 pb-1 text-ellipsis overflow-hidden whitespace-nowrap w-full block">
                  Toda la música
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="mt-6 font-bold tracking-widest uppercase text-gray-500 text-2xl mb-4">
          Carpetas
        </h1>

        <div className="slider-width">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            spaceBetween={10}
            slidesPerView={5}
          >
            {library.paths.map((path, index) => (
              <SwiperSlide key={index}>
                <div 
                  onClick={() => navigate('/playlists/folder/' + toBase64(path))}
                className="bg-white dark:bg-slate-900 dark:border-transparent dark:text-white rounded-md border overflow-hidden shadow-xl hover:bg-gray-50 cursor-pointer hover:border-blue-600 transition-all dark:hover:bg-gray-500/20 dark:hover:border-gray-200/0">
                  <div className=" h-28 flex items-center justify-center">
                    <FolderIcon className=" w-14 h-14" />
                  </div>
                  <span className="px-2 pt-1 pb-1 text-center text-ellipsis overflow-hidden whitespace-nowrap w-full block">
                    {path.split("\\").pop()}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </AnimationLayout>
  );
};
