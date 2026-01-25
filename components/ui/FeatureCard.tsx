import React from 'react';
import Image from 'next/image';
import { FeatureCardContainer, FeatureCardVariant } from './FeatureCardContainer'; // Adjust path

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
  variant?: FeatureCardVariant;
}

export const FeatureCard = ({
  title,
  description,
  imageSrc,
  className = '',
  variant = '1', 
}: FeatureCardProps) => {
  return (
    // Outer dimensions wrapper
    <div className={`w-full max-w-[350px] md:max-w-none md:w-[560px] min-h-[155px] ${className}`}>
      
      <FeatureCardContainer variant={variant}>
        {/* INNER CONTENT WRAPPER */}
          <div className="flex flex-col md:flex-row items-center md:items-center w-full h-full p-6 gap-2 md:gap-7 justify-center md:justify-center">
          
          {/* LEFT IMAGE */}
          <div className="relative w-[293px] h-[120px] md:w-[183px] md:h-[122px] shrink-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-lg w-full h-full"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="flex flex-col gap-2 mt-2 md:mt-0 z-10 justify-center items-center md:items-start">
            <h3 className="text-sm md:text-[20px] font-bold font-heading text-white leading-tight tracking-wider">
              {title}
            </h3>
            <p className="text-xs md:text-[16px] text-[#DDE2FF] font-heading leading-snug text-center md:text-left">
              {description}
            </p>
          </div>
          
        </div>
      </FeatureCardContainer>
    </div>
  );
};