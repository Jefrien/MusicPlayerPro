import { NavLink } from "react-router-dom";
import { HomeIcon, MoonIcon, PlaylistsIcon, SunIcon } from "../ui/Icon";
import { SettingsIcon } from "./../ui/Icon";
import { useContext } from 'react';
import { PlayerContext } from './../../context/PlayerContext';

export const NavBar = () => {

  const { dark, toggleDark } = useContext(PlayerContext)

  return (
    <div className="w-20 bg-gray-50 dark:bg-slate-900 h-screen flex-none border-r border-gray-200 dark:border-slate-700/0 flex flex-col justify-between">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(state) =>
              "w-full flex items-center justify-center border-r-2 h-20 transition-all   " +
              (state.isActive
                ? "text-blue-500 border-blue-500 bg-gray-200 dark:bg-gray-200/10"
                : " border-transparent hover:bg-gray-200 dark:hover:bg-gray-200/10 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500")
            }
          >
            <HomeIcon className="w-8 h-8" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlists"
            className={(state) =>
              "w-full flex items-center justify-center border-r-2 h-20 transition-all   " +
              (state.isActive
                ? "text-blue-500 border-blue-500 bg-gray-200 dark:bg-gray-200/10"
                : " border-transparent hover:bg-gray-200 dark:hover:bg-gray-200/10 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500")
            }
          >
            <PlaylistsIcon className="w-8 h-8" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(state) =>
              "w-full flex items-center justify-center border-r-2 h-20 transition-all   " +
              (state.isActive
                ? "text-blue-500 border-blue-500 bg-gray-200 dark:bg-gray-200/10"
                : " border-transparent hover:bg-gray-200 dark:hover:bg-gray-200/10 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500")
            }
          >
            <SettingsIcon className="w-8 h-8" />
          </NavLink>
        </li>
      </ul>
      <ul className="pb-20">
      <li>
          <button onClick={toggleDark} className="w-full flex items-center justify-center border-r-2 h-20 transition-all border-transparent text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400">
              { !dark ? <MoonIcon className='w-8 h-8' /> : <SunIcon className='w-8 h-8' /> }              
          </button>
        </li>
      </ul>
    </div>
  );
};
