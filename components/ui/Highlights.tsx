import React from 'react';
import Image from 'next/image';

interface HighlightsProps {
  imageSrc: string;
  altText: string;
  maxWidth?: string;
}

const Highlights = ({ 
  imageSrc, 
  altText, 
  maxWidth = "262px" 
}: HighlightsProps) => {
  return (
    <section className="w-full flex justify-center">
      <div 
        // 1. Added 'relative' so the image stays contained
        // 2. Kept min-h-[442px] to enforce consistency
        className="relative h-full min-h-[442px] min-w-[262px] w-full flex items-center justify-center" 
        style={{ maxWidth: maxWidth }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={262}
          height={442}
          className="w-full h-full object-cover"
          draggable={false}
          priority
        />
      </div>
    </section>
  );
};

export default Highlights;