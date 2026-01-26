'use client';

import { FeatureCard } from '@/components/ui/FeatureCard';
import Image from 'next/image';

const TOP_POLYGONS = {
  mobile:
    'polygon(0% 10%, 20% 5%, 50% 12%, 80% 5%, 100% 10%, 100% 100%, 0% 100%)',
  tablet:
    'polygon(0% 7%, 5% 6%, 15% 7%, 40% 4%, 80% 8%, 100% 5%, 100% 100%, 0% 100%)',
  desktop:
    'polygon(0% 15%, 18% 10%, 22% 13%, 50% 7%, 68% 14%, 90% 8%, 100% 13%, 100% 100%, 0% 100%)',
};

const BOTTOM_POLYGONS = {
  mobile:
    'polygon(0% 90%, 20% 95%, 50% 88%, 80% 95%, 100% 90%, 100% 100%, 0% 100%)',
  tablet: 'polygon(0% 92%, 30% 90%, 65% 95%, 100% 92%, 100% 100%, 0% 100%)',
  desktop:
    'polygon(0% 95%, 15% 90%, 20% 93%, 50% 85%, 70% 95%, 90% 90%, 100% 95%, 100% 100%, 0% 100%)',
};

export default function Tournament() {
  return (
    <div className="relative w-full">
      <style jsx>{`
        .tournament-clips {
          --top-clip: ${TOP_POLYGONS.mobile};
          --bottom-clip: ${BOTTOM_POLYGONS.mobile};
        }
        @media (min-width: 768px) {
          .tournament-clips {
            --top-clip: ${TOP_POLYGONS.tablet};
            --bottom-clip: ${BOTTOM_POLYGONS.tablet};
          }
        }
        @media (min-width: 1440px) {
          .tournament-clips {
            --top-clip: ${TOP_POLYGONS.desktop};
            --bottom-clip: ${BOTTOM_POLYGONS.desktop};
          }
        }
      `}</style>

      {/* =========================================================
          PART 1: THE IMAGE LAYER (Sits behind/above)
          - This container holds the football field image.
          - It has its own white background clipped to the shape.
         ========================================================= */}
      <div className="tournament-clips relative w-full h-[400px] lg:h-[600px] z-0">
        {/* The White Background (Clipped) */}
        <div
          className="absolute inset-0 w-full h-full bg-white"
          style={{ clipPath: 'var(--top-clip)' }}
        />

        {/* The Image (Clipped) */}
        {/* We place it INSIDE the clipped area. No negative top needed here. */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: 'var(--top-clip)' }}
        >
          <Image
            src="/tournament_section/football_field.png"
            alt="Football Field"
            fill
            className="object-contain object-bottom opacity-90"
          />
        </div>

        {/* Background Decoration (Floating B/C letters) */}
        <Image
          src="/tournament_section/bc.svg"
          width={1080}
          height={720}
          alt=""
          className="w-fit absolute top-10 right-0 -z-10 opacity-50"
        />
      </div>

      {/* =========================================================
          PART 2: THE CONTENT LAYER (Sits on top)
          - Negative margin pulls this whole section UP over the image.
          - It contains the dark gradient and text.
         ========================================================= */}
      <section className="tournament-clips relative z-10 -mt-[200px] lg:-mt-[300px] pb-20">
        {/* Dark Background Wrapper */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
          {/* Dark Gradient (Top Clip) */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary-800 from-0% to-black to-60%"
            style={{ clipPath: 'var(--top-clip)' }}
          />
          {/* White Bottom Overlay (Bottom Clip) */}
          <div
            className="absolute inset-0 w-full h-full bg-white z-40"
            style={{ clipPath: 'var(--bottom-clip)' }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-[1280px] mx-auto px-6 pt-32 lg:pt-48">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-17 justify-center items-center">
            <div className="flex flex-col gap-6 text-white w-full lg:w-[40%] lg:text-left text-center">
              <span className="font-black text-h4 md:text-h3 lg:text-h2 uppercase leading-tight">
                ASIA’S FIRST <span className="text-brandRed-400">$100,000</span>{' '}
                WINNER-TAKE-ALL TOURNAMENT
              </span>
              <span className="text-lg md:text-xl font-normal font-heading opacity-90 text-primary-100 lg:w-full md:w-[80%] mx-auto">
                R1VALS is a stage built to crown champions and change lives.
                Powered by 30+ years of sports and entertainment experience, we
                have reimagined football for the digital age.
              </span>
            </div>

            <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-end justify-center">
              <FeatureCard
                title="Winner-Take-All"
                description="$100,000 USD on the line. One team takes the glory; the rest take notes."
                imageSrc="/tournament_section/item_1.png"
                variant="1"
              />
              <FeatureCard
                title="Star Power"
                description="Featuring elite professionals and global celebrities."
                imageSrc="/tournament_section/item_2.png"
                variant="2"
              />
              <FeatureCard
                title="Global Reach"
                description="Built to be the #1 most-streamed 7-aside competition worldwide."
                imageSrc="/tournament_section/item_3.png"
                variant="3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
