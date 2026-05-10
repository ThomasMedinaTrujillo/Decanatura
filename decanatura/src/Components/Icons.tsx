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

// Menu Three Icon (Hamburger)
export const MenuThree: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 24 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
    <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
    <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
  </svg>
);

export default {
  CheckCircle,
  CloseCircle,
  PuzzleIcon,
  MenuThree,
};
