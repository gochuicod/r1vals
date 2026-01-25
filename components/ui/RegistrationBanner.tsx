import React from 'react';

export const RegistrationBanner = () => {
  return (
    /* Container size matches the Figma Group (424x113) */
    <div className="relative w-full  max-w-[424px] h-[113px] flex items-center justify-center shrink-0">
      
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 528 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-150" /* Scale up to ensure the glow fills the 424px box */
        >
          <g filter="url(#filter0_d_52_44)">
            <path
              d="M52 84.0244L52 95.7761L100 48H210.4L476 48L412.534 121.186H324.801H261.068H258.934H92.4933L52 161.532L52 95.7761L52 95.7761L52 84.0244Z"
              fill="#FF1B1B"
            />
          </g>
          <defs>
            <filter id="filter0_d_52_44" x="0" y="0" width="528" height="217.532" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="26" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_52_44" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_52_44" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* TEXT CONTENT - Using Figma Typography */}
      <h2 
        className="relative z-10 text-white font-black text-[24px] uppercase tracking-widest translate-y-[-20px] -left-6 ml-10"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Registration
      </h2>
    </div>
  );
};