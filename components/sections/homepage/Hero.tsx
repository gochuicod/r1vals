'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils'; // Ensure you have this utility or use template literals

// --- CONFIGURATION ---
const VIDEO_ID_MOBILE = 'TZTCZPHzuqU';
const VIDEO_ID_DESKTOP = 'ySivgesy5X4';

export default function Hero() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Detect screen width
  const [isMobile, setIsMobile] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 1440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine video ID
  const currentVideoId = !isMobile ? VIDEO_ID_DESKTOP : VIDEO_ID_MOBILE;

  const handleImageLoad = () => setLoadedCount((prev) => prev + 1);
  const isReady = loadedCount >= 2;

  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setStartAnimation(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  const handleIframeLoad = () => {
    // We add a small delay to ensure the inner YouTube player is initialized
    setTimeout(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: 'unMute', // Send the command to unmute
            args: [],
          }),
          '*',
        );
      }
    }, 500); // 500ms delay for stability
  };

  const getVar = (mobile: string, tablet: string, desktop: string) => {
    if (isDesktop) return desktop;
    if (isMobile) return mobile;
    return tablet;
  };

  const contentY = getVar('-65vw', '-35vw', '-14vw');
  const videoY = getVar('0vw', '0vw', '0vw');
  const curtainLeft = getVar('-100%', '-100%', '-100%');
  const curtainRight = getVar('100%', '100%', '100%');

  const mainTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };
  // Slower transition for the layout shift to look cinematic
  const layoutTransition = { duration: 1.5, ease: [0.16, 1, 0.3, 1] } as const;

  const pulseTransition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  };

  const getTextAnimation = () => {
    // 1. If Video is playing, reset transforms so Flexbox Layout takes over
    if (isVideoPlaying) {
      return { opacity: 1, scale: 1, y: 0 };
    }
    // 2. Start Animation (Curtains opening)
    if (startAnimation) {
      return { opacity: [0, 1, 0], scale: 0.5, y: contentY };
    }
    // 3. Initial Load
    if (isReady) {
      return { opacity: 1, scale: 1, y: 0 };
    }
    return { opacity: 0, scale: 1, y: 20 };
  };

  const getVideoAnimation = () => {
    if (startAnimation) {
      return { opacity: 1, y: videoY };
    }
    if (isReady) {
      return { opacity: 1, y: 0 };
    }
    return { opacity: 0, y: 20 };
  };

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-black',
        // --- UPDATED HEIGHT LOGIC ---
        // Mobile: Fixed height (Vertical video)
        'h-[693px]',
        // Tablet & Desktop: Height is Auto, controlled by Aspect Ratio (16:9)
        'md:h-auto md:aspect-video',
      )}
    >
      {/* Layer 2: Left Curtain */}
      <motion.div
        className="absolute top-0 left-0 w-[59%] h-[930px] z-20"
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        animate={{
          x: startAnimation ? curtainLeft : '0%',
          filter: showGlow
            ? [
                'drop-shadow(8px 0px 20px rgba(239, 68, 68, 0.6))',
                'drop-shadow(8px 0px 40px rgba(239, 68, 68, 1))',
              ]
            : 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        transition={{ x: mainTransition, filter: pulseTransition }}
        onAnimationComplete={() => {
          if (startAnimation) {
            setShowGlow(true);
            setIsVideoPlaying(true);
          }
        }}
      >
        {/* ... Left Curtain Inner Content ... */}
        <div className="relative w-full h-full">
          <div
            className="relative w-full h-full bg-black overflow-hidden"
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
                  x="5%"
                  y="5%"
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

      {/* Layer 2: Right Curtain */}
      <motion.div
        className="absolute top-0 right-0 w-[59%] h-[930px] z-20"
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        animate={{
          x: startAnimation ? curtainRight : '0%',
          filter: showGlow
            ? [
                'drop-shadow(-8px 0px 20px rgba(95, 252, 255, 0.6))',
                'drop-shadow(-8px 0px 40px rgba(95, 252, 255, 1))',
              ]
            : 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        transition={{ x: mainTransition, filter: pulseTransition }}
      >
        {/* ... Right Curtain Inner Content ... */}
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
                  x="5%"
                  y="5%"
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
                points="28,-10 14,47 23,47 14,78 7,100"
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

      {/* Layer 4: Vector Image */}
      <Image
        src="/hero_section/v2/bottom_vector.svg"
        alt="Vector"
        width={1920}
        height={1080}
        className="absolute bottom-[-1vw] left-0 w-full h-auto z-50 pointer-events-none translate-y-[70%]"
      />

      {/* --------------------------------------------------
        LAYER 3: TEXT & BUTTON (Animated Layout Shift)
        --------------------------------------------------
      */}
      <motion.div
        layout // 1. Enables automatic smooth layout morphing
        transition={layoutTransition}
        className={cn(
          // Base classes
          'absolute z-30 flex pointer-events-none',
          // CONDITIONAL LAYOUT:
          isVideoPlaying
            ? 'inset-x-0 md:bottom-0 bottom-[-5vw] md:flex-row flex-col items-center md:justify-between justify-center px-8 pb-12 lg:px-24 lg:pb-16' // Final State (Bottom Row)
            : 'inset-0 flex-col items-center justify-end lg:justify-center gap-4 lg:mb-0 mb-20', // Initial State (Center Column)
        )}
        initial={{ opacity: 0, y: 20 }} // Removed scale here to let layout handle it
        animate={getTextAnimation()}
      >
        {/* LOGO CONTAINER */}
        <motion.div
          layout="position"
          className={cn(
            'relative pointer-events-auto',
            // Responsive sizing handled by class switching or keep dynamic
            isVideoPlaying
              ? 'w-[150px] h-[50px] lg:w-[200px] lg:h-[80px]' // Smaller logo at bottom
              : 'w-full max-w-[250px] h-[81px] md:max-w-[376px] md:h-[122px] lg:max-w-[501px] lg:h-[163px]', // Large logo at center
          )}
        >
          <Image
            src="/hero_section/r1vals_text.svg"
            alt="Rivals Text"
            fill
            className="object-contain object-left-bottom" // Keep anchored left-bottom
            priority
          />
        </motion.div>

        {/* TEXT: $100,000 PRIZE */}
        <motion.span
          layout="position"
          className={`
            font-black uppercase pointer-events-auto
            ${
              isVideoPlaying
                ? 'lg:text-h4 md:text-h6 text-h6 text-center text-white gap-2'
                : 'text-h2 text-center w-full text-white'
            }
          `}
        >
          win $100,000 cash prize
        </motion.span>

        {/* BUTTON */}
        <motion.div layout="position" className="pointer-events-auto">
          <Button
            href="#contact"
            variant="yellow"
            className={cn(
              isVideoPlaying ? 'text-base lg:text-lg' : 'text-[20px]',
            )}
            size={isVideoPlaying ? 'default' : 'lg'}
            smoothScroll={true}
          >
            Register Now!
          </Button>
        </motion.div>
      </motion.div>

      {/* Layer 1: Video */}
      <motion.div
        className={cn(
          'absolute inset-0 z-10 flex flex-col items-center justify-end lg:justify-center',
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={getVideoAnimation()}
        transition={mainTransition}
      >
        {isReady && (
          <div className={cn('absolute inset-0 overflow-hidden bg-black')}>
            {isVideoPlaying ? (
              <iframe
                ref={iframeRef}
                onLoad={handleIframeLoad}
                className="
                  w-full h-full
                  object-cover
                  md:scale-[1.0] scale-[1.2]
                "
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&mute=1&enablejsapi=1&controls=0&loop=1&playlist=${currentVideoId}&rel=0&playsinline=1&modestbranding=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="w-full h-full bg-black" />
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
}
