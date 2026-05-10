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
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={`text-gray-400 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 4L34 14L28 20L38 26L32 32L42 42H4V4H24Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
