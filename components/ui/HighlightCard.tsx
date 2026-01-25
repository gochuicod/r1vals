import React from 'react';
import Image from 'next/image';
import { HighlightCardContainer } from './HighlightCardContainer'; // Adjust path if needed

type HighlightCardVariant = 'blue' | 'red';

interface HighlightCardProps {
  imageSrc: string;
  title: string;
  description: string;
  variant?: HighlightCardVariant;
  className?: string;
  imageAlt?: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({
  imageSrc,
  title,
  description,
  variant = 'blue',
  className = '',
  imageAlt = '',
}) => {
  return (
    // Outer wrapper defining the size of the "card"
    <div className={`relative w-[262px] h-[440.24px] ${className}`}>
      
      {/* 1. The SVG Container acts as the frame & shadow */}
      <HighlightCardContainer variant={variant}>
        
        {/* 2. Inner Content Wrapper 
            We add padding (p-1 or p-2) to ensure content sits INSIDE the jagged black border */}
        <div className="flex flex-col w-full h-full p-[6px]">
          
          {/* Top Image Section */}
          <div className="relative w-full flex-1 bg-gray-100 overflow-hidden rounded-t-sm">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 262px"
              priority
            />
          </div>

          {/* Bottom Text Section */}
          {/* bg-black ensures it blends with the SVG border if gaps appear */}
          <div className="flex flex-col justify-center items-center px-4 py-4 gap-2 w-full h-[132px] bg-black shrink-0 rounded-b-sm">
            <div className="text-center flex-wrap text-h6 !text-white font-bold mb-1">
              {title}
            </div>
            <div className="text-body font-inter text-center text-[#DDE2FF] text-sm">
              {description}
            </div>
          </div>
          
        </div>
      </HighlightCardContainer>
    </div>
  );
};