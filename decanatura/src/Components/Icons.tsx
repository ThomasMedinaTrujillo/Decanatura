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
    className={`text-purple-500 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
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
    className={`text-purple-500 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
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
      <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M20.1083 9.80889C19.9418 9.80889 19.778 9.82076 19.6179 9.84362V4.90443H14.6787C14.7015 4.74425 14.7134 4.5805 14.7134 4.41399C14.7134 4.24747 14.7015 4.08372 14.6787 3.92354C14.4406 2.2598 13.0098 0.980865 11.2803 0.980865C9.55074 0.980865 8.11991 2.2598 7.88194 3.92354C7.85902 4.08372 7.84716 4.24747 7.84716 4.41399C7.84716 4.5805 7.85902 4.74425 7.88194 4.90443H2.9427V11.5427C3.23125 11.3758 3.56627 11.2802 3.9236 11.2802C4.28092 11.2802 4.61594 11.3758 4.90449 11.5427C5.49086 11.8819 5.88538 12.5159 5.88538 13.242C5.88538 13.9682 5.49086 14.6021 4.90449 14.9413C4.61594 15.1083 4.28092 15.2038 3.9236 15.2038C3.56627 15.2038 3.23125 15.1083 2.9427 14.9413V21.5796H9.58096C9.41404 21.291 9.3185 20.956 9.3185 20.5987C9.3185 20.2414 9.41404 19.9064 9.58096 19.6178C9.92018 19.0314 10.5541 18.6369 11.2803 18.6369C12.0064 18.6369 12.6404 19.0314 12.9796 19.6178C13.1465 19.9064 13.2421 20.2414 13.2421 20.5987C13.2421 20.956 13.1465 21.291 12.9796 21.5796H19.6179V16.6404C19.778 16.6633 19.9418 16.6751 20.1083 16.6751C20.2749 16.6751 20.4386 16.6633 20.5988 16.6404C22.2625 16.4023 23.5414 14.9715 23.5414 13.242C23.5414 11.5125 22.2625 10.0817 20.5988 9.84362C20.4386 9.82076 20.2749 9.80889 20.1083 9.80889ZM12.7366 4.62665L12.4163 6.86622H17.6561V12.106L19.8957 11.7857C19.9641 11.7759 20.035 11.7707 20.1083 11.7707C20.9209 11.7707 21.5796 12.4294 21.5796 13.242C21.5796 14.0546 20.9209 14.7134 20.1083 14.7134C20.035 14.7134 19.9641 14.7082 19.8957 14.6983L17.6561 14.378V19.6178H15.0803C14.6446 17.9256 13.1085 16.6751 11.2803 16.6751C9.45206 16.6751 7.91588 17.9256 7.48033 19.6178H4.90449V17.042C6.59675 16.6064 7.84716 15.0702 7.84716 13.242C7.84716 11.4138 6.59675 9.87765 4.90449 9.44206V6.86622H10.1443L9.82395 4.62664C9.81414 4.5582 9.80895 4.48728 9.80895 4.41399C9.80895 3.60139 10.4677 2.94265 11.2803 2.94265C12.0929 2.94265 12.7516 3.60139 12.7516 4.41399C12.7516 4.48727 12.7464 4.55819 12.7366 4.62665Z" fill="var(--fill-0, #CECFD4)"/>
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
      d="M1.58333 4.04167C1.58333 3.46637 2.0497 3 2.62499 3H21.375C21.9503 3 22.4167 3.46637 22.4167 4.04167C22.4167 4.61696 21.9503 5.08333 21.375 5.08333H2.62499C2.0497 5.08333 1.58333 4.61696 1.58333 4.04167ZM1.58333 11.3333C1.58333 10.758 2.0497 10.2917 2.62499 10.2917H21.375C21.9503 10.2917 22.4167 10.758 22.4167 11.3333C22.4167 11.9086 21.9503 12.375 21.375 12.375H2.62499C2.0497 12.375 1.58333 11.9086 1.58333 11.3333ZM1.58333 18.625C1.58333 18.0497 2.0497 17.5833 2.62499 17.5833H21.375C21.9503 17.5833 22.4167 18.0497 22.4167 18.625C22.4167 19.2003 21.9503 19.6667 21.375 19.6667H2.62499C2.0497 19.6667 1.58333 19.2003 1.58333 18.625Z" 
    />
  </svg>
);

export default {
  CheckCircle,
  CloseCircle,
  PuzzleIcon,
  MenuThree,
};
