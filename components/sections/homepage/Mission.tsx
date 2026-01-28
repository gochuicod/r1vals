'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

// --- IMPORTS ---
import Highlights from '@/components/ui/Highlights';
import { HIGHLIGHT_CARDS_DATA } from '@/constants/index';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

// --- ANIMATION CONSTANTS ---
const FADE_IN_VARIANTS = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { when: 'afterChildren' },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'beforeChildren',
    },
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Mission() {
  return (
    <section
      id="mission"
      className={cn(
        // Layout & Positioning
        'relative flex flex-col justify-center items-center',
        // Sizing
        'w-full min-h-[708px]',
        // Spacing
        'py-[20vh] gap-8',
        // Behavior
        'overflow-hidden',
      )}
    >
      <SectionHeader />

      <motion.div
        className={cn('relative z-20 w-full my-8')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={FADE_IN_VARIANTS}
      >
        <DesktopGrid />
        <MobileCarousel />
      </motion.div>

      <FooterMessage />
    </section>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

/**
 * Handles the "bleeding" background image logic.
 * Forces desktop width on mobile to prevent cropping, auto-scales on desktop.
 */
function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-0 flex justify-center items-center">
      <div
        className={cn(
          'relative h-full',
          // Critical sizing logic
          'min-w-[1280px] lg:min-w-0 lg:w-full',
        )}
      >
        <Image
          src="/mission_section/background.svg"
          alt="Mission Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative z-10 flex flex-col w-full">
      <h4
        className={cn(
          // Typography
          'uppercase font-black text-center',
          'lg:text-h4 md:text-h5 text-h5',
        )}
      >
        <span className="text-white">more than football -</span>{' '}
        <span className="text-[#FCC800]">we change lives</span>
      </h4>
      <span className="text-center text-white font-heading font-normal lg:text-body-lg text-body-md leading-12 px-4">
        Our mission extends beyond the pitch. R1VALS is dedicated to
        transforming the community through:
      </span>
    </div>
  );
}

function FooterMessage() {
  return (
    <h5 className="relative z-10 text-center uppercase font-bold font-body lg:text-h4 md:text-h5 text-h5 text-white">
      leave a legacy.
    </h5>
  );
}

// --- DESKTOP VIEW ---
function DesktopGrid() {
  return (
    <div
      className={cn(
        // Visibility
        'hidden lg:flex',
        // Layout
        'flex-row flex-wrap justify-center',
        // Sizing & Spacing
        'max-w-[1200px] mx-auto gap-7 px-4',
      )}
    >
      {HIGHLIGHT_CARDS_DATA.map((card, index) => (
        <div key={index} className="flex justify-center">
          <Highlights imageSrc={card.imageSrc} altText={card.alt} />
        </div>
      ))}
    </div>
  );
}

// --- MOBILE VIEW ---
function MobileCarousel() {
  // State moved here to isolate re-renders from the main component
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={cn(
        // Visibility
        'block lg:hidden',
        // Layout
        'w-full pl-5 md:pl-10',
      )}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{ align: 'center', loop: true }}
        className={cn('relative w-full max-w-[1200px] mx-auto')}
      >
        <CarouselContent className="-ml-4">
          {/* Loop 6 times for infinite feel */}
          {Array.from({ length: 6 }).map((_, index) => {
            const cardData =
              HIGHLIGHT_CARDS_DATA[index % HIGHLIGHT_CARDS_DATA.length];
            return (
              <CarouselItem
                key={index}
                className={cn('pl-4 basis-[75%] md:basis-[40%]')}
              >
                <div className="flex justify-center w-full h-full p-2">
                  <Highlights
                    imageSrc={cardData.imageSrc}
                    altText={cardData.alt}
                    maxWidth="100%"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              // Sizing
              'h-3 w-3 md:h-4 md:w-4',
              // Animation
              'transition-all duration-300',
              // State Styles
              index === current - 1 ? 'bg-white' : 'border-2 border-white',
            )}
          />
        ))}
      </div>
    </div>
  );
}
