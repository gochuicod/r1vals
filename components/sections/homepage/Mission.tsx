'use client';

import { useEffect, useState, useRef } from 'react';
import { HighlightCard } from '@/components/ui/HighlightCard';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

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
        // FIX: Added 'as const' here so TS recognizes it as a Bezier Tuple, not a number[]
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
        'py-19',
        // Behavior
        'overflow-hidden',
      )}
    >
      {/* --- HEADING SECTION --- */}
      <h4
        className={cn(
          // Typography
          'uppercase font-black text-center',
          'lg:text-h4 text-h5',
        )}
      >
        more than football -{' '}
        <span className="text-primary-600">we change lives</span>
      </h4>

      <span
        className={cn(
          // Typography
          'text-center font-heading font-normal',
          // Sizing
          'max-w-[800px]',
          // Spacing
          'px-4',
        )}
      >
        Our mission extends beyond the pitch. R1VALS is dedicated to
        transforming the community through:
      </span>

      {/* --- CUSTOM DIVIDER (TOP) --- */}
      <div
        className={cn(
          // Sizing
          'w-full max-w-[1200px] h-[20px]',
          // Spacing
          'mt-6',
          'lg:px-0 md:px-10 px-6',
        )}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          className={cn(
            // Visuals
            'stroke-black stroke-[3px] fill-none',
          )}
        >
          <polyline points="0,2 250,2 300,18 750,18 800,2 900,2 950,18 1150,18 1200,2" />
        </svg>
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
            'gap-10 px-4',
            // Sizing
            'max-w-[1200px] mx-auto',
          )}
        >
          {HIGHLIGHT_CARDS_DATA.map((card, index) => (
            <div key={index} className="flex justify-center">
              <HighlightCard
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                variant={card.variant as 'blue' | 'red'}
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
                      'md:basis-[35%] basis-[70%]',
                    )}
                  >
                    <div className={cn('p-2 flex justify-center h-full')}>
                      <HighlightCard
                        imageSrc={cardData.imageSrc}
                        title={cardData.title}
                        description={cardData.description}
                        variant={cardData.variant as 'blue' | 'red'}
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
                    ? 'bg-primary-600' // Active
                    : 'bg-white/30 hover:bg-black/10 border border-2 border-primary-600', // Inactive
                )}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- CUSTOM DIVIDER (BOTTOM) --- */}
      <div
        className={cn(
          // Sizing
          'w-full max-w-[1200px] h-[20px]',
          // Spacing
          'mt-6',
          'lg:px-0 md:px-10 px-6',
        )}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          className={cn(
            // Visuals
            'stroke-black stroke-[3px] fill-none',
          )}
        >
          <polyline points="0,18 250,18 300,2 750,2 800,18 900,18 950,2 1150,2 1200,2" />
        </svg>
      </div>

      {/* Final Message */}
      <h5 className="uppercase font-bold text-center lg:text-h5 text-h6">
        leave a legacy.
      </h5>
    </section>
  );
}
