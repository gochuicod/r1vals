'use client';

import { useRef } from 'react';
import { FeatureCard } from '@/components/ui/FeatureCard';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

// Keep this for the Image container (CSS Clip Path needs %)
const DESKTOP_CLIP = `
  polygon(
    0% 22%, 4% 14%, 10% 17%, 18% 19%, 26% 18%, 34% 19%, 42% 17%, 50% 19%,
    58% 21%, 66% 19%, 74% 20%, 82% 18%, 90% 20%, 100% 18%,
    100% 78%, 96% 88%, 90% 84%, 82% 81%, 74% 82%, 66% 80%, 58% 84%,
    50% 82%, 42% 80%, 34% 83%, 26% 82%, 18% 84%, 10% 82%, 0% 82%
  )
`;

// NEW: Clean version for SVG (Removed '%' for SVG coordinate system 0-100)
const SVG_POINTS = `
  0,22 4,14 10,17 18,19 26,18 34,19 42,17 50,19
  58,21 66,19 74,20 82,18 90,20 100,18
  100,78 96,88 90,84 82,81 74,82 66,80 58,84
  50,82 42,80 34,83 26,82 18,84 10,82 0,82
`;

export default function Tournament() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '-30%']);

  return (
    <div id="about" className="relative w-full">
      <div className="relative w-full overflow-hidden flex justify-center">
        <div
          ref={containerRef}
          className="relative min-w-[1280px] lg:w-full flex-shrink-0 h-[400px] lg:h-[700px] z-0"
        >
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="roughEdges"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.55"
                  numOctaves="20"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="5"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>

            <polygon
              points={SVG_POINTS}
              fill="white"
              stroke="white"
              strokeWidth="1.5" // Adds thickness so it peeks out behind the image
              strokeLinejoin="round"
              style={{ filter: 'url(#roughEdges)' }}
            />
          </svg>

          {/* Parallax Image Wrapper (Sits on top of the white SVG) */}
          <div
            className="absolute inset-0 z-1"
            style={{
              clipPath: DESKTOP_CLIP,
              transform: 'scaleY(0.95)', // Makes image slightly shorter so white background shows
              zIndex: 1,
            }}
          >
            <motion.div
              style={{ y }}
              className="relative w-full h-full top-[25%]"
            >
              <Image
                src="/tournament_section/football_team.png"
                alt="Football Field"
                fill
                className="md:object-cover object-contain object-center opacity-90"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="tournament-clips relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-11 justify-center items-start">
            <div className="flex flex-col gap-6 text-white w-full lg:w-[40%] lg:text-left lg:items-start text-center items-center md:items-center">
              <span className="font-black text-h4 md:text-h3 lg:text-h3 uppercase leading-tight">
                ASIA’S FIRST <span className="text-yellow-400">$100,000</span>{' '}
                WINNER-TAKE-ALL TOURNAMENT
              </span>
              <span className="text-lg md:text-xl font-normal font-heading opacity-90 text-primary-100 lg:w-[75%] md:w-[80%]">
                R1VALS is a stage built to crown champions and change lives.
                Powered by 30+ years of sports and entertainment experience, we
                have reimagined football for the digital age.
              </span>
            </div>

            <div className="flex flex-col w-full lg:w-fit items-center lg:items-end justify-center gap-2 overflow-clip">
              <FeatureCard
                variantIndex={0}
                title="Winner-Take-All"
                description="$100,000 USD on the line. One team takes the glory; the rest take notes."
                thumbnailSrc="/tournament_section/winner-take-all.webp"
              />
              <FeatureCard
                variantIndex={1}
                title="Star Power"
                description="Featuring elite professionals and global celebrities."
                thumbnailSrc="/tournament_section/star-power.webp"
              />
              <FeatureCard
                variantIndex={2}
                title="Global Reach"
                description="Built to be the #1 most-streamed 7-aside competition worldwide."
                thumbnailSrc="/tournament_section/global-reach.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
