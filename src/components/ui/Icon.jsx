export const TrashIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
);

export const HomeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="4" y="13" rx="2" width="5" height="7" />
    <rect x="15" y="13" rx="2" width="5" height="7" />
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
  </svg>
);

export const SettingsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const PlaylistsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="14" cy="17" r="3" />
    <path d="M17 17v-13h4" />
    <path d="M13 5h-10" />
    <line x1="3" y1="9" x2="13" y2="9" />
    <path d="M9 13h-6" />
  </svg>
);

export const LoadingIcon = ({ className }) => (
  <svg
    className={className}
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 0 0"
  >
    <circle fill="currentColor" stroke="none" cx="6" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"
      ></animate>
    </circle>
    <circle fill="currentColor" stroke="none" cx="26" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.2"
      ></animate>
    </circle>
    <circle fill="currentColor" stroke="none" cx="46" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.3"
      ></animate>
    </circle>
  </svg>
);

export const FolderIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
  </svg>
);

export const DotsIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </svg>
);

export const PlayIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 4v16l13 -8z" fill="currentColor" />
  </svg>
);

export const PauseIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
    <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
  </svg>
);

export const MoonIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  </svg>
);

export const SunIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="4" />
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
  </svg>
);

export const NextIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <title>skip-next</title>
    <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
  </svg>
);

export const BackIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <title>skip-previous</title>
    <path fill="currentColor" d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
  </svg>
);

export const ShuffleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <title>shuffle-variant</title>
    <path
      fill="currentColor"
      d="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z"
    />
  </svg>
);

export const RepeatIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <title>repeat-variant</title>
    <path
      fill="currentColor"
      d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z"
    />
  </svg>
);

export const ListIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

export const MicIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    strokeWidth="1"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15.002 12.9a5 5 0 1 0 -3.902 -3.9" />
    <path d="M15.002 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
  </svg>
);
