// BrushedOfferContainer.tsx
import React from 'react';
import { BrushBorder } from './BrushBorder'; // Import from Step 1

export const BrushedOfferContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-fit lg:max-w-full group">
      {/* Background/Frame */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BrushBorder className="w-full h-full drop-shadow-xl text-[#FCC800]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white">
        {children}
      </div>
    </div>
  );
};