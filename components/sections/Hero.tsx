'use client';

import Image from 'next/image';

const POLYGONS = {
  mobile: 'polygon(0% 100%, 55% 90%, 65% 100%, 85% 95%, 100% 100%, 0% 100%)',
  tablet: 'polygon(0% 100%, 55% 90%, 65% 100%, 85% 95%, 100% 100%, 0% 100%)',
  desktop: 'polygon(0% 100%, 55% 90%, 65% 100%, 85% 95%, 100% 100%, 0% 100%)',
};

export default function Hero() {
  return (
    <section className="relative w-full h-[876px] overflow-hidden bg-black">
      {/* 1. Left Image (Background Layer) */}
      <div className="absolute top-0 left-0 w-[59%] h-[930px] z-0">
        <div
          className="relative w-full h-full bg-black overflow-hidden"
          style={{
            // Increased X values by +1.5% to push edge RIGHT
            clipPath:
              'polygon(0% 0%, 95.5% 0%, 82% 48%, 91% 48%, 83% 78%, 76% 100%, 0% 100%)',
          }}
        >
          <Image
            src="/hero_section/left_image.png"
            alt="left image"
            fill
            className="object-cover"
            priority
          />

          {/* THE JAGGED LINE (Middle part only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Matches clipPath coordinates above */}
            <polyline
              points="96,0 82,48 91.5,48 83.5,78 76,100"
              fill="none"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] stroke-brandRed-400"
            />
          </svg>
        </div>
      </div>

      {/* 2. Right Image (Background Layer) */}
      <div className="absolute top-0 right-0 w-[59%] h-[930px] z-0">
        <div
          className="relative w-full h-full bg-black overflow-hidden"
          style={{
            // Decreased X values by -1.5% to push edge LEFT
            clipPath:
              'polygon(26% 0%, 100% 0%, 100% 100%, 7% 100%, 14% 78%, 23% 47%, 14% 47%)',
          }}
        >
          <Image
            src="/hero_section/right_image.png"
            alt="right image"
            fill
            className="object-cover"
            priority
          />

          {/* THE JAGGED LINE (Left edge only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Matches clipPath coordinates above */}
            <polyline
              points="26,-1 14,47 23,47 14,78 7,100"
              fill="none"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] stroke-primary-600"
            />
          </svg>
        </div>
      </div>

      {/* 3. The White Polygon Overlay (Bottom) */}
      <div
        className="absolute inset-0 z-10 bg-white pointer-events-none"
        style={{
          clipPath: `var(--hero-polygon)`,
        }}
      >
        <style jsx>{`
          div {
            --hero-polygon: ${POLYGONS.mobile};
          }
          @media (min-width: 768px) {
            div {
              --hero-polygon: ${POLYGONS.tablet};
            }
          }
          @media (min-width: 1440px) {
            div {
              --hero-polygon: ${POLYGONS.desktop};
            }
          }
        `}</style>
      </div>

      {/* 4. Content layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        {/* Content here */}
      </div>
    </section>
  );
}
