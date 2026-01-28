'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// --- CONFIGURATION ---
const VIDEO_ID_MOBILE = 'TZTCZPHzuqU';
const VIDEO_ID_DESKTOP = 'ySivgesy5X4';

const TRANSITIONS = {
  main: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  layout: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const },
  pulse: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
};

export default function Hero() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [view, setView] = useState({ isMobile: true, isDesktop: false });

  // Handle Responsive State
  useEffect(() => {
    const handleResize = () => {
      setView({
        isMobile: window.innerWidth < 768,
        isDesktop: window.innerWidth >= 1440,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logic Helpers
  const isReady = loadedCount >= 2;
  const currentVideoId = !view.isMobile ? VIDEO_ID_DESKTOP : VIDEO_ID_MOBILE;

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setStartAnimation(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  // Dynamic values based on viewport
  const getResponsiveValue = (
    mobile: string,
    tablet: string,
    desktop: string,
  ) => {
    if (view.isDesktop) return desktop;
    if (view.isMobile) return mobile;
    return tablet;
  };

  const contentY = getResponsiveValue('-65vw', '-35vw', '-14vw');

  // Organized Class Names
  const styles = {
    section: cn(
      'relative w-full overflow-hidden bg-black',
      'h-[693px] md:h-auto md:aspect-video',
    ),
    curtain: 'absolute top-0 w-[59%] h-[930px] z-20',
    curtainInner: 'relative w-full h-full bg-black overflow-hidden',
    contentWrapper: cn(
      'absolute z-[55] flex pointer-events-none transition-all',
      isVideoPlaying
        ? 'inset-x-0 md:bottom-0 bottom-[-3vw] md:flex-row flex-col items-center md:justify-between justify-center px-8 pb-12 lg:px-24 lg:pb-16 gap-2'
        : 'inset-0 flex-col items-center justify-end lg:justify-center gap-4 lg:mb-0 mb-20',
    ),
    logoContainer: cn(
      'relative pointer-events-auto',
      isVideoPlaying
        ? 'w-[150px] h-[50px] lg:w-[200px] lg:h-[80px]'
        : 'w-full max-w-[250px] h-[81px] md:max-w-[376px] md:h-[122px] lg:max-w-[501px] lg:h-[163px]',
    ),
    prizeText: `
      font-black uppercase pointer-events-auto transition-all
      ${
        isVideoPlaying
          ? 'lg:text-h4 md:text-h6 text-h6 text-center text-white gap-2'
          : 'text-h2 text-center w-full text-white'
      }
    `,
  };

  return (
    <section className={styles.section}>
      {/* Left Curtain */}
      <motion.div
        className={cn(styles.curtain, 'left-0')}
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        animate={{
          x: startAnimation ? '-100%' : '0%',
          filter: showGlow
            ? [
                'drop-shadow(8px 0px 20px rgba(239, 68, 68, 0.6))',
                'drop-shadow(8px 0px 40px rgba(239, 68, 68, 1))',
              ]
            : 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        transition={{ x: TRANSITIONS.main, filter: TRANSITIONS.pulse }}
        onAnimationComplete={() =>
          startAnimation && (setShowGlow(true), setIsVideoPlaying(true))
        }
      >
        <div
          className={styles.curtainInner}
          style={{
            clipPath:
              'polygon(0% 0%, 99.5% 0%, 80% 51.5%, 91.5% 51.5%, 82% 78%, 76% 100%, 0% 100%)',
          }}
        >
          <Image
            src="/hero_section/v2/left_image.png"
            alt="left"
            fill
            className="object-cover"
            priority
            onLoad={() => setLoadedCount((p) => p + 1)}
          />
          <CurtainSVG side="left" />
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        className={cn(styles.curtain, 'right-0')}
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        animate={{
          x: startAnimation ? '100%' : '0%',
          filter: showGlow
            ? [
                'drop-shadow(-8px 0px 20px rgba(95, 252, 255, 0.6))',
                'drop-shadow(-8px 0px 40px rgba(95, 252, 255, 1))',
              ]
            : 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        transition={{ x: TRANSITIONS.main, filter: TRANSITIONS.pulse }}
      >
        <div
          className={styles.curtainInner}
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
            onLoad={() => setLoadedCount((p) => p + 1)}
          />
          <CurtainSVG side="right" />
        </div>
      </motion.div>

      {/* Side Gradients */}
      <div className="pointer-events-none absolute inset-0 z-[20] w-screen">
        {/* Left red gradient */}
        <div className="absolute left-0 bottom-0 h-1/4 w-1/2 bg-gradient-to-t from-brandRed-800 to-transparent blur-3xl" />

        {/* Right blue gradient */}
        <div className="absolute right-0 bottom-0 h-1/4 w-1/2 bg-gradient-to-t from-primary-800 to-transparent blur-3xl" />
      </div>

      {/* Hero Content */}
      <motion.div
        layout
        transition={TRANSITIONS.layout}
        className={styles.contentWrapper}
        initial={{ opacity: 0, y: 20 }}
        animate={
          isVideoPlaying
            ? { opacity: 1, scale: 1, y: 0 }
            : startAnimation
              ? { opacity: [0, 1, 0], scale: 0.5, y: contentY }
              : { opacity: 1, y: 0 }
        }
      >
        <motion.div layout="position" className={styles.logoContainer}>
          <Image
            src="/hero_section/r1vals_text.svg"
            alt="Rivals Text"
            fill
            className="object-contain object-left-bottom"
            priority
          />
        </motion.div>

        <motion.span layout="position" className={styles.prizeText}>
          win $100,000 cash prize
        </motion.span>

        <motion.div layout="position" className="pointer-events-auto">
          <Button
            href="#contact"
            variant="yellow"
            className={isVideoPlaying ? 'text-base lg:text-lg' : 'text-[20px]'}
            size={isVideoPlaying ? 'default' : 'lg'}
            smoothScroll
          >
            Register Now!
          </Button>
        </motion.div>
      </motion.div>

      {/* Video Layer */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={TRANSITIONS.main}
      >
        {isReady && isVideoPlaying && (
          <iframe
            className="w-full h-full object-cover md:scale-100 scale-[1.2] pointer-events-none"
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1&loop=1&playlist=${currentVideoId}&controls=0&playsinline=1`}
            title="Hero Video"
            allow="autoplay; encrypted-media"
          />
        )}
      </motion.div>
    </section>
  );
}

// --- SUB-COMPONENTS TO CLEAN UP THE MAIN COMPONENT ---

function CurtainSVG({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  const filterId = isLeft ? 'roughStroke' : 'roughStrokePrimary';
  const colorClass = isLeft ? 'stroke-brandRed-400' : 'stroke-primary-600';
  const points = isLeft
    ? '99,0 80,52 91.5,52 82.5,78 76,100'
    : '28,-10 14,47 23,47 14,78 7,100';

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={filterId} x="5%" y="5%" width="100%" height="100%">
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
        points={points}
        fill="none"
        className={cn(colorClass, 'lg:stroke-[3px] stroke-[5px]')}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: `url(#${filterId})` }}
      />
    </svg>
  );
}
