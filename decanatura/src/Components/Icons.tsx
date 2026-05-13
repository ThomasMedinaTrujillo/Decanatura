import React from 'react';

// Check Circle Icon
export const CheckCircle: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 48 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M16 24L22 30L34 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Close Circle Icon
export const CloseCircle: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 48 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M18 18L30 30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 18L18 30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Puzzle Icon
export const PuzzleIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 48 
}) => (
  <svg
    preserveAspectRatio="none"
    width={size}
    height={size}
    viewBox="0 0 23.5414 23.5414"
    fill="none"
    className={className}
    style={{ display: 'block', overflow: 'visible' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="puzzle" clipPath="url(#clip0_2064_2127)">
      <path id="Vector" fillRule="evenodd" clipRule="evenodd" fill='currentColor' stroke='none' d="M20.1083 9.80889C19.9418 9.80889 19.778 9.82076 19.6179 9.84362V4.90443H14.6787C14.7015 4.74425 14.7134 4.5805 14.7134 4.41399C14.7134 4.24747 14.7015 4.08372 14.6787 3.92354C14.4406 2.2598 13.0098 0.980865 11.2803 0.980865C9.55074 0.980865 8.11991 2.2598 7.88194 3.92354C7.85902 4.08372 7.84716 4.24747 7.84716 4.41399C7.84716 4.5805 7.85902 4.74425 7.88194 4.90443H2.9427V11.5427C3.23125 11.3758 3.56627 11.2802 3.9236 11.2802C4.28092 11.2802 4.61594 11.3758 4.90449 11.5427C5.49086 11.8819 5.88538 12.5159 5.88538 13.242C5.88538 13.9682 5.49086 14.6021 4.90449 14.9413C4.61594 15.1083 4.28092 15.2038 3.9236 15.2038C3.56627 15.2038 3.23125 15.1083 2.9427 14.9413V21.5796H9.58096C9.41404 21.291 9.3185 20.956 9.3185 20.5987C9.3185 20.2414 9.41404 19.9064 9.58096 19.6178C9.92018 19.0314 10.5541 18.6369 11.2803 18.6369C12.0064 18.6369 12.6404 19.0314 12.9796 19.6178C13.1465 19.9064 13.2421 20.2414 13.2421 20.5987C13.2421 20.956 13.1465 21.291 12.9796 21.5796H19.6179V16.6404C19.778 16.6633 19.9418 16.6751 20.1083 16.6751C20.2749 16.6751 20.4386 16.6633 20.5988 16.6404C22.2625 16.4023 23.5414 14.9715 23.5414 13.242C23.5414 11.5125 22.2625 10.0817 20.5988 9.84362C20.4386 9.82076 20.2749 9.80889 20.1083 9.80889ZM12.7366 4.62665L12.4163 6.86622H17.6561V12.106L19.8957 11.7857C19.9641 11.7759 20.035 11.7707 20.1083 11.7707C20.9209 11.7707 21.5796 12.4294 21.5796 13.242C21.5796 14.0546 20.9209 14.7134 20.1083 14.7134C20.035 14.7134 19.9641 14.7082 19.8957 14.6983L17.6561 14.378V19.6178H15.0803C14.6446 17.9256 13.1085 16.6751 11.2803 16.6751C9.45206 16.6751 7.91588 17.9256 7.48033 19.6178H4.90449V17.042C6.59675 16.6064 7.84716 15.0702 7.84716 13.242C7.84716 11.4138 6.59675 9.87765 4.90449 9.44206V6.86622H10.1443L9.82395 4.62664C9.81414 4.5582 9.80895 4.48728 9.80895 4.41399C9.80895 3.60139 10.4677 2.94265 11.2803 2.94265C12.0929 2.94265 12.7516 3.60139 12.7516 4.41399C12.7516 4.48727 12.7464 4.55819 12.7366 4.62665Z"/>
    </g>
    <defs>
      <clipPath id="clip0_2064_2127">
        <rect width="23.5414" height="23.5414" fill="#FFFFFF"/>
      </clipPath>
    </defs>
  </svg>
);

// Menu Three Icon (Hamburger from Figma)
export const MenuThree: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.5523 20.5523 7 20 7H4C3.44772 7 3 6.5523 3 6ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" 
      fill="currentColor" 
    />
  </svg>
);

// Loudspeaker Icon
export const LoudspeakerIcon: React.FC<{ className?: string; size?: number | string }> = ({ 
  className = '', 
  size = 24
}) => (
  <svg
    preserveAspectRatio="none"
    width={size}
    height={size}
    overflow="visible"
    style={{ display: "block" }}
    viewBox="0 0 36.3636 37.0989"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M27.2391 28.8071L32.7273 32.7273H36.3636V0H32.7273L27.2391 3.92018C22.5309 7.28311 16.8898 9.09091 11.1039 9.09091H7.27273C3.25611 9.09091 0 12.347 0 16.3636C0 20.3802 3.25611 23.6364 7.27273 23.6364H8.01918L10.8534 37.0989L20 31.8182V25.1004C22.5667 25.9687 25.0076 27.2133 27.2391 28.8071ZM29.3525 25.848L32.7273 28.2585V4.46875L29.3525 6.87922C24.0278 10.6827 17.6476 12.7273 11.1039 12.7273H7.27273C5.26442 12.7273 3.63636 14.3553 3.63636 16.3636C3.63636 18.372 5.26442 20 7.27273 20H11.1039C17.6476 20 24.0278 22.0445 29.3525 25.848ZM16.3636 24.1393C14.8444 23.846 13.2969 23.6791 11.7368 23.6436L13.3786 31.4422L16.3636 29.7187V24.1393Z" 
      fill="currentColor"
    />
  </svg>
); 

// Chevron Icon Circle
export const ChevronIconCircle: React.FC<{ className?: string; size?: number | string }> = ({ 
  className = '', 
  size = 20
}) => (
  <svg 
    preserveAspectRatio="none" 
    width={size} 
    height={size} 
    overflow="visible" 
    style={{ display: "block" }} 
    viewBox="0 0 20 20" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M14.8172 9.64266C15.2415 9.2891 15.2988 8.65853 14.9452 8.23425C14.5917 7.80998 13.9611 7.75265 13.5368 8.10622L14.177 8.87444L14.8172 9.64266ZM10.1995 12.189L9.55931 12.9572C9.93016 13.2663 10.4688 13.2663 10.8397 12.9572L10.1995 12.189ZM6.86218 8.10622C6.4379 7.75265 5.80734 7.80998 5.45377 8.23425C5.10021 8.65853 5.15753 9.2891 5.58181 9.64266L6.22199 8.87444L6.86218 8.10622ZM14.177 8.87444L13.5368 8.10622L9.55931 11.4208L10.1995 12.189L10.8397 12.9572L14.8172 9.64266L14.177 8.87444ZM10.1995 12.189L10.8397 11.4208L6.86218 8.10622L6.22199 8.87444L5.58181 9.64266L9.55931 12.9572L10.1995 12.189ZM19 10H18C18 14.4183 14.4183 18 10 18V19V20C15.5228 20 20 15.5228 20 10H19ZM10 19V18C5.58172 18 2 14.4183 2 10H1H0C0 15.5228 4.47715 20 10 20V19ZM1 10H2C2 5.58172 5.58172 2 10 2V1V0C4.47715 0 0 4.47715 0 10H1ZM10 1V2C14.4183 2 18 5.58172 18 10H19H20C20 4.47715 15.5228 0 10 0V1Z" 
      fill="currentColor"
    />
  </svg>
);

// File Icon (white stroke)
export const FileIcon: React.FC<{ className?: string; size?: number | string; stroke?: string }> = ({
  className = '',
  size = 28,
  stroke = 'currentColor',
}) => (
  <svg
    preserveAspectRatio="none"
    width={size}
    height={size}
    overflow="visible"
    style={{ display: 'block' }}
    viewBox="0 0 22.8005 27.6"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4005 1V5.8C15.4005 6.68366 16.1168 7.4 17.0005 7.4H21.8005M19.4005 3.4C18.6884 2.76286 17.9495 2.00717 17.483 1.51637C17.1725 1.18978 16.7437 1 16.2931 1H4.20012C2.43282 1 1.00014 2.43268 1.00012 4.19998L1 23.3999C0.999989 25.1672 2.43267 26.5999 4.19999 26.5999L18.6 26.6C20.3673 26.6 21.8 25.1673 21.8001 23.4001L21.8005 6.43711C21.8005 6.02799 21.6444 5.63471 21.3605 5.34018C20.8354 4.79553 19.9586 3.89936 19.4005 3.4Z"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default {
  CheckCircle,
  CloseCircle,
  PuzzleIcon,
  MenuThree,
  ChevronIconCircle,
  FileIcon
};
