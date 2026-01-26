'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

// --- IMPORTS ---
import Highlights from '@/components/ui/Highlights'; 
import { HIGHLIGHT_CARDS_DATA } from '@/constants/index';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

export default function Mission() {
  // --- CAROUSEL STATE (Only used for Mobile/Tablet) ---
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Initialize Autoplay plugin
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  // --- API LISTENERS ---
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
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

  return (
    <section
      className={cn(
        // Layout
        'flex flex-col justify-center items-center',
        // Sizing
        'min-h-[708px]',
        // Spacing
        'py-[20vh]',
        'gap-8',
        // Behavior
        'overflow-hidden',
        // Background
        'bg-[url("/mission_section/background.svg")]',
        'bg-no-repeat bg-cover bg-center',
      )}
    >
      {/* --- HEADING SECTION --- */}
      <div className="flex flex-col w-full">
        <h4
          className={cn(
            // Typography
            '!text-white uppercase font-black text-center',
            'lg:text-h4 text-h5',
          )}
        >
          more than football -{' '}
          <span className="text-[#FCC800]">we change lives</span>
        </h4>
        <span
          className={cn(
            // Typography
            'text-white text-center !text-[20px] font-heading font-normal leading-12',
            // Spacing
            'px-4',
          )}
        >
          Our mission extends beyond the pitch. R1VALS is dedicated to
          transforming the community through:
        </span>
      </div>

      {/* --- ANIMATED CONTENT SECTION --- */}
      <motion.div
        className={cn(
          // Layout
          'w-full relative',
          // Spacing
          'my-8',
          // Positioning
          'z-20',
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        {/* =========================================
            LAYOUT 1: DESKTOP GRID (Hidden on Mobile)
           ========================================= */}
        <div
          className={cn(
            // Visibility
            'hidden lg:flex',
            // Layout
            'flex-row flex-wrap justify-center',
            // Spacing
            'lg:gap-7 md:gap-4 px-4',
            // Sizing
            'max-w-[1200px] mx-auto',
          )}
        >
          {HIGHLIGHT_CARDS_DATA.map((card, index) => (
            <div key={index} className="flex justify-center">
              <Highlights 
                imageSrc={card.imageSrc} 
                altText={card.alt} 
              />
            </div>
          ))}
        </div>

        {/* =========================================
            LAYOUT 2: MOBILE CAROUSEL (Hidden on Desktop)
           ========================================= */}
        <div
          className={cn(
            // Visibility
            'lg:hidden block',
            // Layout
            'w-full',
            // Spacing (Padding Start)
            'lg:ps-0 md:ps-10 ps-5',
          )}
          // Autoplay Control
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{ align: 'center', loop: true }}
            className={cn(
              // Layout
              'w-full relative',
              // Sizing
              'max-w-[1200px] mx-auto',
            )}
          >
            <CarouselContent className="-ml-4">
              {/* Loop 6 times to create an "infinite" feel */}
              {Array.from({ length: 6 }).map((_, index) => {
                const cardData =
                  HIGHLIGHT_CARDS_DATA[index % HIGHLIGHT_CARDS_DATA.length];

                return (
                  <CarouselItem
                    key={index}
                    className={cn(
                      // Spacing
                      'pl-4',
                      // Responsive Sizing
                      'md:basis-[40%] basis-[75%]',
                    )}
                  >
                    <div className={cn('p-2 flex justify-center h-full w-full')}>
                      {/* Using the new Highlights component */}
                      <Highlights 
                        imageSrc={cardData.imageSrc} 
                        altText={cardData.alt}
                        maxWidth="100%" // Ensure it fills the carousel slide
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
          <div className={cn('flex justify-center gap-2 mt-8')}>
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
                  // Conditional Visuals
                  index === current - 1
                    ? 'bg-white' // Active
                    : 'border-2 border-white', // Inactive
                )}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Final Message */}
      <h5 className="!text-white font-bold font-body text-center lg:text-h5 text-h6 uppercase">
        leave a legacy.
      </h5>
    </section>
  );
}