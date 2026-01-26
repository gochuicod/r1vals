'use client';

import { useRef } from 'react';
import { FeatureCard } from '@/components/ui/FeatureCard';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

const DESKTOP_CLIP = `
  polygon(
    0% 22%, 4% 14%, 10% 17%, 18% 19%, 26% 18%, 34% 19%, 42% 17%, 50% 19%,
    58% 21%, 66% 19%, 74% 20%, 82% 18%, 90% 20%, 100% 18%,
    100% 78%, 96% 88%, 90% 84%, 82% 81%, 74% 82%, 66% 80%, 58% 84%,
    50% 82%, 42% 80%, 34% 83%, 26% 82%, 18% 84%, 10% 82%, 0% 82%
  )
`;

export default function Tournament() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div className="relative w-full">
      {/* WRAPPER:
        1. overflow-hidden: Hides the parts of the wide image that stick out.
        2. flex justify-center: Ensures the wide image stays dead center on small screens.
      */}
      <div className="relative w-full overflow-hidden flex justify-center">
        {/* CONTAINER:
          1. min-w-[1280px]: Forces the "Desktop" width even on mobile.
          2. lg:w-full: On actual desktops, it reverts to fluid full width.
          3. flex-shrink-0: Prevents the flex parent from squishing it.
        */}
        <div
          ref={containerRef}
          className="relative min-w-[1280px] lg:w-full flex-shrink-0 h-[400px] lg:h-[700px] z-0"
        >
          {/* SVG Filter (Unchanged) */}
          <svg width="0" height="0">
            <defs>
              <filter id="roughEdges">
                <feTurbulence
                  type="turbulence"
                  baseFrequency="0.02"
                  numOctaves="8"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="10"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>
          </svg>

          {/* Glow Layer */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: 'rgba(0, 34, 255, 1)',
              filter: 'blur(40px)',
              transform: 'scaleX(1.5) scaleY(0.7)',
            }}
            animate={{
              scaleY: [0.6, 0.8, 0.6],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Background Border Layer */}
          <div
            className="absolute inset-0 bg-primary-600"
            style={{
              clipPath: DESKTOP_CLIP,
              zIndex: 0,
              filter: 'url(#roughEdges)',
            }}
          />

          {/* Parallax Image Wrapper */}
          <div
            className="absolute inset-0 z-1"
            style={{
              clipPath: DESKTOP_CLIP,
              transform: 'scaleY(0.98)',
              zIndex: 1,
            }}
          >
            <motion.div
              style={{ y }}
              className="relative w-full h-[120%] -top-[10%]"
            >
              <Image
                src="/tournament_section/football_field.png"
                alt="Football Field"
                fill
                className="object-cover object-bottom opacity-90"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section (Remains responsive/fluid) */}
      <section className="tournament-clips relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-11 justify-center items-start">
            <div className="flex flex-col gap-6 text-white w-full lg:w-[40%] lg:text-left text-center">
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

            <div className="flex flex-col w-full lg:w-fit items-center lg:items-end justify-center">
            {/* Card 1 (Index 0) */}
            <FeatureCard
              variantIndex={0}
              title="Winner-Take-All"
              description="$100,000 USD on the line. One team takes the glory; the rest take notes."
              thumbnailSrc="/tournament_section/item_1.png"
            />

            {/* Card 2 (Index 1) */}
            <FeatureCard
              variantIndex={1}
              title="Star Power"
              description="Featuring elite professionals and global celebrities."
              thumbnailSrc="/tournament_section/item_2.png"
            />

            {/* Card 3 (Index 2) */}
            <FeatureCard
              variantIndex={2}
              title="Global Reach"
              description="Built to be the #1 most-streamed 7-aside competition worldwide."
              thumbnailSrc="/tournament_section/item_3.png"
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
