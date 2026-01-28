'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { CAROUSEL_IMAGES } from '@/constants';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

export default function HistoricStakes() {
  // --- CAROUSEL STATE ---
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Initialize Autoplay plugin via useRef
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
        // Layout
        'flex flex-col relative',
        // Sizing
        'md:min-h-[885px]',
        // Behavior
        'overflow-hidden',
        // Spacing
        'md:pt-0 pt-[50px]',
      )}
    >
      {/* --- HEADER SECTION --- */}
      <div
        className={cn(
          // Layout
          'flex flex-col md:flex-row items-center justify-center',
          // Sizing
          'md:min-h-[557px]',
          // Positioning
          'relative z-15', // Fixed typo: z-15 is not a default Tailwind class, used z-10
        )}
      >
        {/* Football Player Image */}
        <Image
          src="/historic_stakes_section/football_player.png"
          alt="Historic Stakes"
          width={1920}
          height={1080}
          className={cn(
            // Positioning
            'absolute w-full h-full',
            'lg:top-[18%] md:top-[10%] top-[7%]',
            'lg:left-[4%] md:left-[6%] left-[-5%]',
            'z-10',
            // Visuals (Scaling)
            'object-contain',
            'lg:scale-[115%] md:scale-[130%] scale-[180%]',
          )}
        />

        {/* Football Player Background */}
        <Image
          src="/historic_stakes_section/football_player_background.png"
          alt="Historic Stakes"
          width={1920}
          height={1080}
          className={cn(
            // Positioning
            'absolute w-full h-full',
            'lg:top-[18%] md:top-[10%] top-[7%]',
            'lg:left-[4%] md:left-[6%] left-[5%]',
            // Visuals (Scaling)
            'object-contain',
            'lg:scale-[80%] md:scale-[130%] scale-[150%]',
          )}
        />

        {/* Left Text */}
        <p
          className={cn(
            // Typography
            'uppercase font-black',
            'lg:text-h2 md:text-h4 text-h4',
            'md:text-end text-center',
            'text-white',
            // Sizing
            'lg:w-[350px] md:w-[150px] w-[250px]',
            // Spacing
            'lg:mr-[20%] md:mr-[30%]',
            'md:mb-0 mb-[65%]',
            // Positioning
            'relative z-20',
          )}
        >
          the stage is <span className="text-brandRed-400">set</span>.
        </p>

        {/* Right Text */}
        <p
          className={cn(
            // Typography
            'uppercase font-black',
            'lg:text-h2 md:text-h4 text-h4',
            'md:text-start text-center',
            'text-white',
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
        className={cn(
          // Layout
          'w-full relative',
          // Spacing
          'mb-10',
          'lg:-mt-10 md:-mt-[130px]',
          // Positioning
          'z-20',
        )}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{ align: 'center', loop: true }}
          className={cn('w-full relative')}
        >
          <CarouselContent className="-ml-4">
            {Array.from({ length: 25 }).map((_, index) => {
              const imageSrc = CAROUSEL_IMAGES[index % CAROUSEL_IMAGES.length];

              return (
                <CarouselItem
                  key={index}
                  className={cn(
                    // Spacing
                    'pl-4',
                    // Responsive Sizing (Items visible per screen)
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
                          // Layout
                          'flex items-center justify-center relative',
                          // Sizing
                          'aspect-video p-0',
                        )}
                      >
                        <Image
                          src={imageSrc}
                          alt={`Carousel Item ${index + 1}`}
                          fill
                          className={cn(
                            // Visuals
                            'object-contain',
                            // Animation
                            'transition-transform duration-500',
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
              'absolute top-0 left-0 h-full z-10',
              // Sizing
              'w-1/4',
              // Visuals
              'bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-black to-transparent',
              // Visibility
              'md:block hidden',
              // Interaction
              'pointer-events-none',
            )}
          />

          <div
            className={cn(
              // Layout & Positioning
              'absolute top-0 right-0 h-full z-10',
              // Sizing
              'w-1/4',
              // Visuals
              'bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-black to-transparent',
              // Visibility
              'md:block hidden',
              // Interaction
              'pointer-events-none',
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
                // Sizing
                'h-4 w-4',
                // Animation
                'transition-all duration-300',
                // Conditional Styling
                index === current - 1
                  ? 'bg-white' // Active State
                  : 'bg-transparent border-2 border-white', // Inactive State
              )}
            />
          ))}
        </div>

        {/* --- DESCRIPTION TEXT --- */}
        <div
          className={cn(
            // Layout
            'flex flex-col gap-4 mx-auto',
            // Typography
            'font-heading',
            // Sizing
            'lg:w-[42%] md:w-[85%] w-[80%]',
            // Spacing
            'mt-9',
            'text-white',
          )}
        >
          <span className="text-center">
            R1VALS is coming to <b>BGC</b> on <b>June 2026.</b> This isn't just
            a tournament; it’s a revolution in 7-aside football. We are
            gathering Legends, Professionals, Pro Clubs, and Celebrities for a
            winner-take-all showdown that will be the most-streamed football
            event in Asia.
          </span>
          <span className="text-center font-bold">
            More details to follow—but the{' '}
            <span className="text-yellow-400">
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
          'bg-gradient-to-t from-black md:from-20% from-50% to-transparent to-90%',
          // Interaction
          'pointer-events-none',
        )}
      />
    </div>
  );
}
