import { Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

export const ArtistsCarrousel = () => {
  const { artists } = useContext(PlayerContext);
  const navigate = useNavigate();

  return (
    <div className="slider-width">
      <Swiper
        modules={[Navigation, Mousewheel]}
        navigation={true}
        mousewheel={true}
        spaceBetween={10}
        slidesPerView={5}
      >
        {artists.map((artist, index) => (
          <SwiperSlide key={index}>
            <div 
                onClick={() => navigate('/playlists/artist/' + artist.artist)}
            className="bg-white dark:bg-slate-900 dark:text-white rounded-md overflow-hidden  shadow-md hover:bg-gray-100 cursor-pointer transition-all group">
              <div className="h-28/ overflow-hidden">
                <img
                  src={artist.picture}
                  alt=""
                  className="h-full object-cover w-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <span className="px-2 pt-1 pb-1 text-ellipsis overflow-hidden whitespace-nowrap w-full block">
                {artist.artist}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
