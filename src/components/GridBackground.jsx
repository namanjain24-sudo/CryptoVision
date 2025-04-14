import React from 'react';

const GridBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#020403] text-white overflow-hidden">
      {/* SVG Grid */}
      <svg
        className="absolute inset-0 w-full h-full text-white/10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              filter="url(#glow)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main Content goes here */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
