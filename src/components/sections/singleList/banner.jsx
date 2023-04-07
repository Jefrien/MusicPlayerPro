import { PlayIcon, ShuffleIcon } from "../../ui/Icon";

export const SingleBanner = ({ imageSrc, playListName, onPlay }) => {
  return (
    <div className="w-full h-36 relative bg-blue-900">
      {imageSrc && (
        <img src={imageSrc} className=" object-cover w-full h-full " alt="" />
      )}
      <div className="absolute left-0 bottom-0 bg-gradient-to-t from-gray-200 dark:from-gray-800  to-gray-200/50 dark:to-gray-800/50 z-10 w-full h-full flex items-center justify-between flex-row px-4 backdrop-blur-md">
        <h1 className="font-bold tracking-widest uppercase text-gray-800 dark:text-white text-2xl mb-4">
          {playListName}
        </h1>
        <div className="flex justify-between pr-4">
          <button
            onClick={() => onPlay("shuffle")}
            className="w-10 h-10 bg-slate-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center rounded-full mr-4 "
          >
            <PlayIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => onPlay("shuffle")}
            className="w-10 h-10 bg-slate-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center rounded-full "
          >
            <ShuffleIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
