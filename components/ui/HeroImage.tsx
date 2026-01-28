'use client';

import React from 'react';
import Image from 'next/image';

interface HeroImageProps {
  desktopSrc: string;
  tabletSrc?: string; // Optional: falls back to desktop if not provided
  mobileSrc?: string; // Optional: falls back to tablet/desktop if not provided
  alt?: string;
}

export default function HeroImage({
  desktopSrc,
  tabletSrc,
  mobileSrc,
  alt = "Hero background",
}: HeroImageProps) {
  
  // Fallbacks logic
  const tabletImage = tabletSrc || desktopSrc;
  const mobileImage = mobileSrc || tabletImage;

  return (
    <div className="relative flex w-full h-[60vh] md:h-[800px] overflow-hidden bg-black">
      
      {/* 1. MOBILE IMAGE (Visible below md) */}
      <div className="flex md:hidden relative w-full h-auto -top-28">
        <Image
          src={mobileImage}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. TABLET IMAGE (Visible md to lg) */}
      <div className="hidden md:flex lg:hidden relative w-full h-full -top-40">
        <Image
          src={tabletImage}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 3. DESKTOP IMAGE (Visible lg and up) */}
      <div className="hidden lg:flex relative w-full h-full">
        <Image
          src={desktopSrc}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ------------------------------------------- */}
      {/* OVERLAYS (Applied on top of all images)     */}
      {/* ------------------------------------------- */}
      
      
      {/* Bottom fade gradient */}
<div className="hidden min-[1921px]:block absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />    </div>
  );
}