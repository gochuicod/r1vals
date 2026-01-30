'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ArrowRight, X } from 'lucide-react';

export default function Banner() {
  // --- State & Hooks ---
  const [isVisible, setIsVisible] = useState(true);
  const scrollTo = useSmoothScroll();

  // --- Handlers ---
  const handleClose = () => {
    setIsVisible(false);
    // Optional: You could save to localStorage here so it stays closed on refresh
    // localStorage.setItem('bannerClosed', 'true');
  };

  // --- Styles (Organized) ---
  const bannerClasses = `
    /* Layout & Position */
    fixed bottom-0 z-[1001] h-auto

    /* Background & Theme */
    bg-[url('/banner/banner_border.svg')] bg-no-repeat bg-contain
    text-primary-100

    /* Spacing */
    px-8 pb-8 pt-5 md:pt-7

    /* Mobile: Centered & Responsive */
    left-1/2 -translate-x-1/2
    w-[95%] max-w-[510px]

    /* Desktop: Docked Left */
    lg:left-0 lg:translate-x-0
    lg:w-[510px]
  `;

  // --- Render ---
  if (!isVisible) return null;

  return (
    <div className={bannerClasses}>
      <div className="relative flex flex-row items-center justify-between gap-2 h-fit">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-[-15px] md:-right-[15px] -right-[25px] cursor-pointer group p-1"
          aria-label="Close banner"
        >
          <X className="w-5 h-5 stroke-brandRed-500 transition-transform group-hover:scale-110" />
        </button>

        {/* Left Column: Logo & Text */}
        <div className="flex flex-col justify-center font-heading">
          <Image
            src="/hero_section/r1vals_text.svg"
            alt="R1VALS Logo"
            width={1080}
            height={720}
            className="w-[80%] h-auto"
          />
          <p className="mt-1 text-[14px] md:text-h6">
            Is your team the next{' '}
            <span className="font-bold">R1VALS Champion?</span>
          </p>
        </div>

        {/* Right Column: Prize & Action */}
        <div className="flex flex-col items-center shrink-0 font-bold uppercase">
          <span className="leading-none text-yellow-400 text-h4 md:text-h1">
            $100K
          </span>

          <span className="text-[12px] md:text-md">cash prize</span>

          <Link
            href="/"
            onClick={(e) => scrollTo(e, '/#contact')}
            className="flex flex-row items-center gap-2 mt-1 text-[12px] md:text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Register Now!
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
