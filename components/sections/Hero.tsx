'use client';

/**
 * @component Hero
 * @description
 * A high-impact Hero section featuring a dramatic "Shutter Reveal" animation.
 *
 * @architecture
 * The component is built using a Z-index layered approach:
 * 1. Background Layer: A static, low-opacity football texture.
 * 2. Curtain Layer (Left/Right): Two high-res images that slide outwards.
 * 3. Overlay Layer: A white polygon shape that clips the bottom edge.
 * 4. Content Layer: The text/CTA that fades in and repositions itself.
 *
 * @animation_sequence
 * 1. Preload: Waits for both Left & Right images to fully load via `onLoad`.
 * 2. Stage 1 (Wait): Content fades in at center position.
 * 3. Stage 2 (Open): After 2s, curtains slide out (X-axis) and Content shrinks/moves up.
 * 4. Stage 3 (Glow): Once curtains finish opening, a pulsing neon glow activates.
 *
 * @responsive_strategy
 * Uses CSS Variables (--var) injected via <style jsx> to bridge the gap between
 * Tailwind's media queries and Framer Motion's JavaScript animations.
 */

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';

// Clip-path polygon coordinates for the bottom white overlay across devices.
const POLYGONS = {
  mobile: 'polygon(0% 90.5%, 2% 90%, 45% 100%, 100% 93%, 100% 100%, 0% 100%)',
  tablet:
    'polygon(0% 95%, 25% 92%, 40% 100%, 90% 90%, 100% 93%, 100% 100%, 0% 100%)',
  desktop: 'polygon(0% 100%, 55% 90%, 63% 97%, 85% 90%, 100% 100%, 0% 100%)',
};

export default function Hero() {
  // --- STATE MANAGEMENT ---
  const [loadedCount, setLoadedCount] = useState(0); // Tracks image loading (0 to 2)
  const [startAnimation, setStartAnimation] = useState(false); // Triggers the "Open" phase
  const [showGlow, setShowGlow] = useState(false); // Triggers the "Pulse" phase

  // Increment counter when a heavy image finishes loading
  const handleImageLoad = () => setLoadedCount((prev) => prev + 1);

  // Check if both curtain images are ready to prevent animation stutter
  const isReady = loadedCount >= 2;

  // --- TIMING LOGIC ---
  // Once images are loaded, wait 2 seconds before triggering the curtain reveal.
  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => setStartAnimation(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  // --- TRANSITION CONFIGURATIONS ---
  // Cubic-bezier ease for a snappy, high-quality "mechanical" feel
  const mainTransition = {
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  // Smooth, infinite loop for the neon glow effect
  const pulseTransition = {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'reverse' as const, // Oscillates between Min and Max shadow
    ease: 'easeInOut' as const,
  };

  // --- ANIMATION VARIANTS ---
  // Calculates the Content Layer's state based on the current sequence phase
  const getContentAnimation = () => {
    // Phase 3: Curtains Open -> Shrink text and move it up to variable position
    if (startAnimation) {
      return { opacity: 1, scale: 0.5, y: 'var(--content-y)' };
    }
    // Phase 2: Loaded -> Fade text in at normal size
    if (isReady) {
      return { opacity: 1, scale: 1, y: 0 };
    }
    // Phase 1: Loading -> Hidden and slightly lowered
    return { opacity: 0, scale: 1, y: 20 };
  };

  return (
    <section className="hero-section relative w-full h-[876px] overflow-hidden bg-black">
      {/* --- RESPONSIVE VARIABLE INJECTION ---
        We inject CSS variables here to handle complex responsive values (like VW units)
        that Motion cannot automatically calculate from Tailwind classes.
      */}
      <style jsx>{`
        .hero-section {
          /* === MOBILE DEFAULT === */
          --hero-polygon: ${POLYGONS.mobile};
          --content-y: -65vw; /* Distance content moves up */
          --curtain-left: -80%; /* Distance left curtain slides out */
          --curtain-right: 80%; /* Distance right curtain slides out */
        }

        /* === TABLET (md: 768px) === */
        @media (min-width: 768px) {
          .hero-section {
            --hero-polygon: ${POLYGONS.tablet};
            --content-y: -40vw;
            --curtain-left: -50%;
            --curtain-right: 50%;
          }
        }

        /* === DESKTOP (lg: 1440px) === */
        @media (min-width: 1440px) {
          .hero-section {
            --hero-polygon: ${POLYGONS.desktop};
            --content-y: -15vw;
            --curtain-left: -35%;
            --curtain-right: 30%;
          }
        }
      `}</style>

      {/* Layer 1: Static Background Texture */}
      <Image
        src="/hero_section/football_background.png"
        alt="background"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Layer 2A: Left Curtain Wrapper */}
      <motion.div
        className="absolute top-0 left-0 w-[59%] h-[930px] z-0"
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        animate={{
          x: startAnimation ? 'var(--curtain-left)' : '0%',
          // Pass an array to `filter` to create a keyframe loop (Pulse)
          filter: showGlow
            ? [
                'drop-shadow(8px 0px 20px rgba(239, 68, 68, 0.6))', // Min Glow
                'drop-shadow(8px 0px 40px rgba(239, 68, 68, 1))', // Max Glow
              ]
            : 'drop-shadow(0px 0px 0px rgba(239, 68, 68, 0))',
        }}
        transition={{
          x: mainTransition,
          filter: pulseTransition, // Apply infinite pulse only to filter
        }}
        // Callback: Once the curtain opens, trigger the glow state
        onAnimationComplete={() => {
          if (startAnimation) setShowGlow(true);
        }}
      >
        {/* Inner Container for Clipping & Asset */}
        <div className="relative w-full h-full">
          <div
            className="relative w-full h-full bg-black overflow-hidden"
            style={{
              clipPath:
                'polygon(0% 0%, 95.5% 0%, 82% 48%, 91% 48%, 83% 78%, 76% 100%, 0% 100%)',
            }}
          >
            <Image
              src="/hero_section/left_image.png"
              alt="left"
              fill
              className="object-cover"
              priority
              onLoad={handleImageLoad} // Notify parent when loaded
            />
            {/* Decorative Jagged Line SVG */}
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
      </motion.div>

      {/* Layer 2B: Right Curtain Wrapper */}
      <motion.div
        className="absolute top-0 right-0 w-[59%] h-[930px] z-0"
        initial={{
          x: '0%',
          filter: 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        animate={{
          x: startAnimation ? 'var(--curtain-right)' : '0%',
          filter: showGlow
            ? [
                'drop-shadow(-8px 0px 20px rgba(95, 252, 255, 0.6))', // Min Glow
                'drop-shadow(-8px 0px 40px rgba(95, 252, 255, 1))', // Max Glow
              ]
            : 'drop-shadow(0px 0px 0px rgba(95, 252, 255, 0))',
        }}
        transition={{
          x: mainTransition,
          filter: pulseTransition,
        }}
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
              src="/hero_section/right_image.png"
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
              <polyline
                points="26,-1 14,47 23,47 14,78 7,100"
                fill="none"
                className="stroke-primary-600 lg:stroke-[3px] stroke-[5px]"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Layer 3: White Polygon Overlay (Bottom edge) */}
      <div
        className="absolute inset-0 z-10 bg-white pointer-events-none"
        style={{ clipPath: `var(--hero-polygon)` }}
      />

      {/* Layer 4: Content & CTA */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center lg:justify-center justify-end gap-4 lg:mb-0 mb-20"
        initial={{ opacity: 0, y: 20, scale: 1 }}
        animate={getContentAnimation()} // Uses helper to determine state
        transition={mainTransition}
      >
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
        <Button
          variant="protocol"
          className="font-bebas_neue w-fit"
          size="protocol"
        >
          7x7 PROTOCOL: ASIA’S LARGEST
        </Button>
      </motion.div>
    </section>
  );
}
