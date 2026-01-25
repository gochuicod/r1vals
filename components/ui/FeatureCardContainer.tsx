import React from 'react';

export type FeatureCardVariant = '1' | '2' | '3';

interface FeatureCardContainerProps {
  children: React.ReactNode;
  variant?: FeatureCardVariant;
  className?: string;
}

export const FeatureCardContainer = ({
  children,
  variant = '1',
  className = '',
}: FeatureCardContainerProps) => {
  return (
    <div className={`relative w-full h-full p-4 isolate ${className}`}>
      {/* SVG Background Layer */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        {variant === '1' && <SvgVariant1 />}
        {variant === '2' && <SvgVariant2 />}
        {variant === '3' && <SvgVariant3 />}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// --- SVG DEFINITIONS ---

const SvgVariant1 = () => (
  <svg className="w-full h-full" viewBox="0 0 600 198" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <g filter="url(#filter_feature_v1)">
      <path d="M20 165.479L20 165.241L33.2406 178H72.2501H520.25H550.125L580 148.076V20L545.25 20L534.5 30.7677H307.5L296.75 20L35 20L20 35.0247L20 165.479Z" fill="#470000" fillOpacity="0.4" shapeRendering="crispEdges"/>
      <path d="M296.335 21L306.793 31.4746L307.086 31.7676H534.914L535.207 31.4746L545.664 21H579V147.661L549.711 177H33.6436L21 164.814V35.4385L35.415 21H296.335Z" stroke="#D40000" strokeWidth="2" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter_feature_v1" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
      </filter>
    </defs>
  </svg>
);

const SvgVariant2 = () => (
  <svg className="w-full h-full" viewBox="0 0 601 190" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <g filter="url(#filter_feature_v2)">
      <path d="M24.34 117.68V106.34H20V98.64H24.34V87.3H20V79.05H28.73V48.88H20V20H338.52V27.27H357.65V20H554.25L580.94 46.69V144.99H577.2V156.33H580.94V169.94H39.83L20 146.11V117.68H24.34Z" fill="#470000" fillOpacity="0.4" shapeRendering="crispEdges"/>
      <path d="M358.65 21V28.2695H337.52V21H20.9996V47.8799H29.73V80.0498H20.9996V86.2998H25.3404V99.6396H20.9996V105.34H25.3404V118.68H20.9996V145.747L40.2984 168.94H579.94V157.33H576.2V143.99H579.94V47.1045L553.836 21H358.65Z" stroke="#D40000" strokeWidth="2" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter_feature_v2" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
      </filter>
    </defs>
  </svg>
);

const SvgVariant3 = () => (
  <svg className="w-full h-full" viewBox="0 0 603 194" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <g filter="url(#filter_feature_v3)">
      <path d="M521.439 160.484H551.958L582.479 130.01V58.2346L544.244 20L316.549 20L306.012 30.5371H278.154L267.617 20L35.3239 20L20 35.3009L20 147.733L20 160.867L33.1333 174H507.923L521.439 160.484Z" fill="#470000" fillOpacity="0.4" shapeRendering="crispEdges"/>
      <path d="M267.203 21L277.74 31.5371H306.427L316.964 21H543.83L581.479 58.6484V129.595L551.544 159.484H521.024L507.509 173H33.5479L21 160.452V35.7158L35.7383 21H267.203Z" stroke="#D40000" strokeWidth="2" shapeRendering="crispEdges"/>
    </g>
    <defs>
      <filter id="filter_feature_v3" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
      </filter>
    </defs>
  </svg>
);