import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundImg: string;
  mobileBackgroundImg?: string;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  imageSrc,
  backgroundImg,
  mobileBackgroundImg,
  className = '',
}: FeatureCardProps) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center text-center md:text-left w-full max-w-[350px] md:max-w-none md:w-[560px] min-h-[155px] p-6 md:p-8 gap-6 md:gap-7 overflow-hidden rounded-xl isolate ${className}`}>
      {/* BACKGROUND LAYER */}
      {/* Desktop Background: Hidden on mobile, block on md+ */}
      <Image
        src={backgroundImg}
        alt=""
        fill
        className={`object-contain -z-10 ${mobileBackgroundImg ? 'hidden md:block' : 'block'}`}
        priority
      />

      {/* Mobile Background: Block on mobile, hidden on md+ */}
      {mobileBackgroundImg && (
        <Image
          src={mobileBackgroundImg}
          alt=""
          fill
          className="object-contain -z-10 md:hidden"
          priority
        />
      )}

      {/* WRAPPER FOR IMAGE AND TEXT */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto p-1 md:p-6 gap-0 md:gap-7">
        {/* LEFT IMAGE / TOP IMAGE ON MOBILE */}
        <div className="relative w-[240px] h-[90px] md:w-[184px] md:h-[123px] shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col md:gap-2 mt-4 z-10 justify-center items-center md:items-start">
          <h3 className="text-sm md:text-[20px] font-bold font-heading text-white leading-tight">
            {title}
          </h3>
          <p className="text-xs md:text-[16px] text-[#DDE2FF] font-heading leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};