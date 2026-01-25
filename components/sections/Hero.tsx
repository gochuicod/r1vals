'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const POLYGONS = {
  mobile: 'polygon(0% 90.5%, 2% 90%, 45% 100%, 100% 93%, 100% 100%, 0% 100%)',
  tablet:
    'polygon(0% 95%, 25% 92%, 40% 100%, 90% 90%, 100% 93%, 100% 100%, 0% 100%)',
  desktop: 'polygon(0% 100%, 55% 90%, 63% 97%, 85% 90%, 100% 100%, 0% 100%)',
};

export default function Hero() {
  return (
    <section className="relative w-full h-[876px] overflow-hidden bg-black">
      <Image
        src="/hero_section/football_background.png"
        alt="left image"
        fill
        className="object-cover"
        priority
      />
      {/* 1. Left Image (Background Layer) */}
      <div className="absolute top-0 left-0 w-[59%] h-[930px] z-0">
        {/* NEW: Outer Shadow Wrapper */}
        <div
          className="relative w-full h-full"
          // style={{
          //   filter: 'drop-shadow(8px 0px 15px rgba(255, 27, 27, 1))',
          // }}
        >
          <div
            className="relative w-full h-full bg-black overflow-hidden"
            style={{
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
              <polyline
                points="96,0 82,48 91.5,48 83.5,78 76,100"
                fill="none"
                className="stroke-brandRed-400 lg:stroke-[3px] stroke-[5px]"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Right Image (Background Layer) */}
      <div className="absolute top-0 right-0 w-[59%] h-[930px] z-0">
        <div
          className="relative w-full h-full"
          // style={{
          //   filter: 'drop-shadow(0 0px 25px rgba(95, 252, 255, 1))',
          // }}
        >
          {/* STEP 2: The Clipped Child */}
          <div
            className="relative w-full h-full bg-black overflow-hidden"
            style={{
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

            {/* THE JAGGED LINE (Visual stroke) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polyline
                points="26,-1 14,47 23,47 14,78 7,100"
                fill="none"
                className="stroke-primary-600 lg:stroke-[3px] stroke-[5px]"
              />
            </svg>
          </div>
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
      <div className="absolute inset-0 z-20 flex flex-col items-center lg:justify-center justify-end gap-4 lg:mb-0 mb-20">
        <div className="relative w-full lg:max-w-[501px] md:max-w-[376px] max-w-[250px] h-full lg:max-h-[163px] md:max-h-[122px] max-h-[81px]">
          <Image
            src="/hero_section/r1vals_text.svg"
            alt="Rivals Text"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-h2 text-white text-center font-bold uppercase lg:w-full w-[80%]">
          win $100,000 usd cash prize
        </span>
        <Button variant="protocol" className="font-bebas_neue w-fit">
          7x7 PROTOCOL: ASIA’S LARGEST
        </Button>
      </div>
    </section>
  );
}
