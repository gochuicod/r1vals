'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

// Define your 3 images here
const CAROUSEL_IMAGES = [
  '/historic_stakes_section/carousel/item_1.png',
  '/historic_stakes_section/carousel/item_2.png',
  '/historic_stakes_section/carousel/item_3.png',
];

export default function HistoricStakes() {
  // --- CAROUSEL STATE ---
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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

  return (
    <div
      className={cn(
        // Layout & Sizing
        'flex flex-col md:min-h-[885px] relative',
        'overflow-hidden',
      )}
    >
      {/* --- HEADER SECTION --- */}
      <div
        className={cn(
          // Layout
          'flex flex-col md:flex-row items-center justify-center md:min-h-[557px]',
          // Positioning
          'relative z-15',
        )}
      >
        <Image
          src="/historic_stakes_section/football_player_bg.png"
          alt="Historic Stakes"
          width={1920}
          height={1080}
          className={cn(
            // Positioning
            'absolute w-full h-full',
            'lg:top-[18%] md:top-[10%] top-[7%] lg:left-[4%] md:left-[6%] left-[-5%]',
            // Visuals
            'object-contain lg:scale-[115%] md:scale-[130%] scale-[180%]',
          )}
        />

        {/* Left Text */}
        <p
          className={cn(
            // Typography
            'uppercase font-bold lg:text-h2 md:text-5xl text-h4 md:text-end text-center',
            // Sizing
            'lg:w-[350px] md:w-[150px] w-[250px]',
            // Positioning
            'relative z-20',
            // Spacing
            'lg:mr-[20%] md:mr-[30%]',
            'md:mb-0 mb-[65%]',
          )}
        >
          the stage is <span className="text-brandRed-400">set</span>.
        </p>

        {/* Right Text */}
        <p
          className={cn(
            // Typography
            'uppercase font-bold lg:text-h2 md:text-5xl text-h4',
            // Sizing
            'lg:w-[400px] md:w-[200px] w-[300px]',
            // Positioning
            'relative z-20',
          )}
        >
          the stakes are <span className="text-primary-600">historic</span>.
        </p>
      </div>
      {/* --- CAROUSEL SECTION --- */}
      <div
        className={cn('w-full mb-10 relative z-20')}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <Carousel
          setApi={setApi}
          opts={{ align: 'center', loop: true }}
          className={cn('w-full relative')}
          plugins={[plugin.current]}
        >
          <CarouselContent className="-ml-4">
            {Array.from({ length: 15 }).map((_, index) => {
              const imageSrc = CAROUSEL_IMAGES[index % CAROUSEL_IMAGES.length];

              return (
                <CarouselItem
                  key={index}
                  className={cn(
                    // Spacing
                    'pl-4',
                    // Responsive Sizing (Items per screen)
                    'lg:basis-[22%] md:basis-[40%] basis-[60%]',
                  )}
                >
                  <div className="p-1">
                    <Card
                      className={cn(
                        // Visuals
                        'overflow-hidden rounded-xl border-none shadow-none',
                        // Interaction
                        'select-none',
                      )}
                    >
                      <CardContent
                        className={cn(
                          'flex aspect-video items-center justify-center relative p-0',
                        )}
                      >
                        <Image
                          src={imageSrc}
                          alt={`Carousel Item ${index + 1}`}
                          fill
                          className={cn(
                            'object-contain transition-transform duration-500',
                          )}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* --- RADIAL GRADIENTS (FADE EDGES) --- */}
          <div
            className={cn(
              // Layout & Positioning
              'absolute top-0 left-0 w-1/4 h-full z-10',
              // Visuals
              'bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-white to-transparent',
              // Interaction
              'pointer-events-none',
              // Visuals
              'md:block hidden',
            )}
          />

          <div
            className={cn(
              // Layout & Positioning
              'absolute top-0 right-0 w-1/4 h-full z-10',
              // Visuals
              'bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white to-transparent',
              // Interaction
              'pointer-events-none',
              // Visuals
              'md:block hidden',
            )}
          />
        </Carousel>

        {/* --- PAGING INDICATORS (DOTS) --- */}
        <div className={cn('flex justify-center gap-2 mt-6')}>
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                // Base Layout & Animation
                'md:h-5 md:w-5 h-3 w-3 transition-all duration-300',
                // Conditional Styling
                index === current - 1
                  ? 'bg-primary-600' // Active
                  : 'bg-white/30 hover:bg-white/50 border border-2 border-primary-600', // Inactive
              )}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 font-heading lg:w-[42%] md:w-[85%] w-[80%] mx-auto mt-9">
          <span className="text-center">
            R1VALS is coming to <b>BGC</b> on <b>May 29-31, 2026.</b> This isn't
            just a tournament; it’s a revolution in 7-aside football. We are
            gathering Legends, Professionals, Pro Clubs, and Celebrities for a
            winner-take-all showdown that will be the most-streamed football
            event in Asia.
          </span>
          <span className="text-center font-bold">
            More details to follow—but the{' '}
            <span className="text-primary-600">
              hunt for champions starts now.
            </span>
          </span>
        </div>
      </div>
      {/* --- BOTTOM GRADIENT OVERLAY --- */}
      <div
        className={cn(
          // Positioning
          'absolute inset-0 z-10',
          // Visuals
          'bg-gradient-to-t from-white from-0% to-transparent to-70%',
          // Interaction
          'pointer-events-none',
        )}
      />
    </div>
  );
}
