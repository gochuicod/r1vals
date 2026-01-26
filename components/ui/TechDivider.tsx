import React from 'react';
import { cn } from "@/lib/utils";

interface TechDividerProps {
  variant?: 'top' | 'bottom';
  className?: string;
}

export const TechDivider = ({ variant = 'top', className }: TechDividerProps) => {
  return (
    <div
      className={cn(
        "w-full h-auto",
        variant === 'top' ? "min-h-[31px] mt-6 mb-4" : "min-h-[14px] mt-4 mb-6",
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        // Dynamically set ViewBox based on variant
        viewBox={variant === 'top' ? "0 0 743 31" : "0 0 744 14"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(0,34,255,0.4)]"
      >
        {variant === 'top' ? (
          <>
            {/* Top Variant: Slanted Decorative Blocks */}
            <g fill="#0022FF">
              <path d="M603.581 10.749L590.577 30.0343L589.186 23.4905L602.188 4.19547L603.581 10.749Z" />
              <path d="M618.698 10.749L605.694 30.0343L604.303 23.4905L617.305 4.19547L618.698 10.749Z" />
              <path d="M633.816 10.749L620.811 30.0343L619.420 23.4905L632.423 4.19547L633.816 10.749Z" />
              <path d="M648.933 10.749L635.929 30.0343L634.538 23.4905L647.540 4.19547L648.933 10.749Z" />
              <path d="M664.050 10.749L651.046 30.0343L649.655 23.4905L662.657 4.19547L664.050 10.749Z" />
              <path d="M679.167 10.749L666.163 30.0343L664.772 23.4905L677.774 4.19547L679.167 10.749Z" />
              <path d="M694.285 10.749L681.280 30.0343L679.889 23.4905L692.892 4.19547L694.285 10.749Z" />
              <path d="M709.402 10.749L696.398 30.0343L695.007 23.4905L708.009 4.19547L709.402 10.749Z" />
              <path d="M724.519 10.749L711.515 30.0343L710.124 23.4905L723.126 4.19547L724.519 10.749Z" />
              <path d="M739.636 10.749L726.632 30.0343L725.241 23.4905L738.243 4.19547L739.636 10.749Z" />
            </g>
            <path 
              d="M737.159 1.00006H366.857L355.261 12.5601H1" 
              stroke="#0022FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </>
        ) : (
          /* Bottom Variant: Single Path */
          <path 
            d="M743 12.56H369.76L358.072 1H1" 
            stroke="#0022FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
};