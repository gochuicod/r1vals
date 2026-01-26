'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';
import { YouTubeEmbed } from '@next/third-parties/google';

export default function Hero() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  const handleImageLoad = () => setLoadedCount((prev) => prev + 1);
  const isReady = loadedCount >= 2;

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setStartAnimation(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  const mainTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };

  const pulseTransition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  };

  // --- FIXED: Renamed from getContentAnimation to getTextAnimation ---
  const getTextAnimation = () => {
    if (startAnimation) {
      return { opacity: 1, scale: 0.5, y: 'var(--content-y)' };
    }
    if (isReady) {
      return { opacity: 1, scale: 1, y: 0 };
    }
    return { opacity: 0, scale: 1, y: 20 };
  };

  const getVideoAnimation = () => {
    if (startAnimation) {
      return { opacity: 1, y: 'var(--video-y)' };
    }
    if (isReady) {
      return { opacity: 1, y: 0 };
    }
    return { opacity: 0, y: 20 };
  };

  return (
    <section className="hero-section relative w-full h-[876px] overflow-hidden bg-black">
      <style jsx>{`
        .hero-section {
          --content-y: -65vw;
          --video-y: -55vw;
          --curtain-left: -80%;
          --curtain-right: 75%;
        }

        @media (min-width: 768px) {
          .hero-section {
            --content-y: -35vw;
            --video-y: -20vw;
            --curtain-left: -65%;
            --curtain-right: 65%;
          }
        }

        @media (min-width: 1440px) {
          .hero-section {
            --content-y: -14vw;
            --video-y: -5vw;
            --curtain-left: -35%;
            --curtain-right: 30%;
          }
        }
      `}</style>

      {/* Layer 0: Static Background (Implicit Z-0) */}
      <Image
        src="/hero_section/football_background.png"
        alt="background"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Layer 2: Left Curtain (Z-20) */}
      <motion.div
        className="absolute top-0 left-0 w-[59%] h-[930px] z-20"
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        animate={{
          x: startAnimation ? 'var(--curtain-left)' : '0%',
          filter: showGlow
            ? [
                'drop-shadow(8px 0px 20px rgba(239, 68, 68, 0.6))',
                'drop-shadow(8px 0px 40px rgba(239, 68, 68, 1))',
              ]
            : 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        transition={{ x: mainTransition, filter: pulseTransition }}
        onAnimationComplete={() => {
          if (startAnimation) setShowGlow(true);
        }}
      >
        <div className="relative w-full h-full">
          <div
            className="relative w-full h-full bg-black overflow-hidden"
            style={{
              clipPath:
                'polygon(0% 0%, 99.5% 0%, 79.5% 51.5%, 90.5% 51.5%, 82% 78%, 76% 100%, 0% 100%)',
            }}
          >
            <Image
              src="/hero_section/v2/left_image.png"
              alt="left"
              fill
              className="object-cover"
              priority
              onLoad={handleImageLoad}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter
                  id="roughStroke"
                  x="-10%"
                  y="-10%"
                  width="100%"
                  height="100%"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.3"
                    numOctaves="8"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
              <polyline
                points="99,0 80,52 91.5,52 82.5,78 76,100"
                fill="none"
                className="stroke-brandRed-400 lg:stroke-[3px] stroke-[5px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'url(#roughStroke)' }}
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Layer 2: Right Curtain (Z-20) */}
      <motion.div
        className="absolute top-0 right-0 w-[59%] h-[930px] z-20"
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        animate={{
          x: startAnimation ? 'var(--curtain-right)' : '0%',
          filter: showGlow
            ? [
                'drop-shadow(-8px 0px 20px rgba(95, 252, 255, 0.6))',
                'drop-shadow(-8px 0px 40px rgba(95, 252, 255, 1))',
              ]
            : 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        transition={{ x: mainTransition, filter: pulseTransition }}
      >
        <div className="relative w-full h-full">
          <div
            className="relative w-full h-full bg-black overflow-hidden"
            style={{
              clipPath:
                'polygon(26% 0%, 100% 0%, 100% 100%, 7% 100%, 14% 78%, 23% 47%, 14% 47%)',
            }}
          >
            <Image
              src="/hero_section/v2/right_image.png"
              alt="right"
              fill
              className="object-cover"
              priority
              onLoad={handleImageLoad}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <filter
                  id="roughStrokePrimary"
                  x="-10%"
                  y="-10%"
                  width="100%"
                  height="100%"
                >
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.3"
                    numOctaves="8"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="2"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
              <polyline
                points="26,-1 14,47 23,47 14,78 7,100"
                fill="none"
                className="stroke-primary-600 lg:stroke-[3px] stroke-[5px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'url(#roughStrokePrimary)' }}
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Layer 4: Vector Image (Z-40) */}
      <Image
        src="/hero_section/bottom_vector.svg"
        alt="Vector"
        width={1920}
        height={1080}
        className="absolute bottom-0 left-0 w-full h-auto z-40 pointer-events-none translate-y-[70%]"
      />

      {/* Layer 3: Text & Button (Z-30) */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center lg:justify-center justify-end gap-4 lg:mb-0 mb-20 pointer-events-none"
        initial={{ opacity: 0, y: 20, scale: 1 }}
        animate={getTextAnimation()}
        transition={mainTransition}
      >
        <div className="relative w-full lg:max-w-[501px] md:max-w-[376px] max-w-[250px] h-full lg:max-h-[163px] md:max-h-[122px] max-h-[81px] pointer-events-auto">
          <Image
            src="/hero_section/r1vals_text.svg"
            alt="Rivals Text"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-h2 text-white text-center font-black uppercase w-full pointer-events-auto">
          win $100,000 cash prize
        </span>
        <Button variant="protocol" className="text-[35px]" size="lg">
          7x7 PROTOCOL: ASIA’S LARGEST
        </Button>
      </motion.div>

      {/* Layer 1: Video (Z-10) */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-end lg:justify-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={getVideoAnimation()}
        transition={mainTransition}
      >
        {isReady && (
          <div className="pointer-events-auto mt-[320px] md:mt-[350px] lg:mt-[280px] w-full max-w-[660px] mx-auto rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black aspect-video">
            <YouTubeEmbed
              videoid="JokmaXB3vqI"
              style="width: 100%; height: 100%;"
              params="controls=1&rel=0"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}
