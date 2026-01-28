import React from 'react';
import Image from 'next/image';
import { FEATURE_CARD_VARIANTS } from '@/constants'; 

interface FeatureCardProps {
  /** 0, 1, or 2 - corresponds to the index in FEATURE_CARD_VARIANTS */
  variantIndex: number;
  
  thumbnailSrc: string;
  title: string;
  description: string;
  className?: string;
  /** Optional: Override the frame manually if needed */
  customFrameSrc?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  variantIndex,
  thumbnailSrc,
  title,
  description,
  className = "",
  customFrameSrc,
}) => {
  const variantData = FEATURE_CARD_VARIANTS[variantIndex] || FEATURE_CARD_VARIANTS[0];
  
  const frameDesktop = customFrameSrc || variantData.desktop;
  const frameMobile = variantData.mobile;

  return (
    <div 
      className={`
        relative 
        max-w-[358px] max-h-[148px]
        /* --- Desktop Dimensions (Frame 5106) --- */
        md:w-full md:max-w-[560px] md:h-[155px]
        
        flex items-center justify-center
        mx-auto
        isolate 
        ${className}
      `}
    >
      {/* --- Background Frame Container --- */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        
        {/* 1. Mobile Frame */}
        <div className="block md:hidden w-full h-full relative">
          <Image
            src={frameMobile}
            alt="Background"
            fill
            key={frameMobile} 
            className="object-fill scale-[1.06] drop-shadow-[0_0_12px_rgba(255,27,27,0.4)]"
          />
        </div>

        {/* 2. Desktop Frame */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src={frameDesktop}
            alt="Background"
            fill
            key={frameDesktop}
            className="object-fill drop-shadow-[0_0_12px_rgba(255,27,27,0.4)]"
          />
        </div>
      </div>

      {/* --- Content Layer --- */}
      <div className="
        relative z-10 w-full h-full 
        /* Figma: padding: 16px 24px */
        md:px-16 px-8 py-4
        flex flex-row md:gap-7 gap-2
        items-center
      ">
        
        {/* Thumbnail Image */}
        <div className="
            relative shrink-0
            w-[138px] h-[92px]
            md:w-[150px] md:h-[100px]            
            overflow-hidden bg-black/20 shadow-inner
        ">
          <Image 
            src={thumbnailSrc}
            alt={title}
            fill
            className="object-cover max-w-[120px] md:max-w-[150px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center h-full flex-1 text-left gap-1 md:gap-2">
          {/* Title - Orbitron */}
          <h3 className="
            text-white 
            font-black uppercase tracking-[4%]
            text-wrap
            text-[16px] leading-[20px]
            md:text-[20px] md:leading-6
            drop-shadow-md
          ">
            {title}
          </h3>
          
          <p className="
            text-[#DDE2FF] 
            font-heading
            text-[10px] leading-[17px]
            md:text-[16px] md:leading-[20px]
            drop-shadow-sm
          ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;