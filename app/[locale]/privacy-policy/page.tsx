'use client';

import React from 'react';
import { PRIVACY_POLICY_CONTENT } from '@/constants'; 
import HeroImage from '@/components/ui/HeroImage';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white overflow-x-hidden">
      
      <div className="flex-shrink-0 w-full h-auto">
        <HeroImage 
          desktopSrc="/privacy/hero-desktop.webp"
          tabletSrc="/privacy/hero-tablet.webp"  
          mobileSrc="/privacy/hero-mobile.webp" 
          alt="R1VALS Team Background"
        />
      </div>

      {/* Main Content Section - Negative Margin to overlap Hero */}
      <section className="z-10 -mt-20 md:-mt-40 lg:mt-0 md:px-8 px-4 pb-24 flex flex-col items-center">
        
        {/* Figma Width: 912px */}
        <div className="w-full max-w-[912px] flex flex-col gap-2 md:gap-8">

          {/* PAGE HEADER */}
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Desktop: 40px, Tablet: 32px, Mobile: 24px - Orbitron/Black */}
            <h1 className="font-body font-black text-[24px] md:text-[32px] lg:text-[40px] leading-tight tracking-widest text-[#FCC800] uppercase">
              Privacy Policy
            </h1>
            {/* Desktop: 20px, Mobile: 16px - Inter */}
            <p className="font-heading text-[16px] md:text-[20px] text-white">
              Last updated: January 28, 2026
            </p>
          </div>

          {/* DYNAMIC CONTENT LOOP */}
          <div className="flex flex-col gap-8 md:gap-12">
            {PRIVACY_POLICY_CONTENT.map((section) => (
              <div key={section.id} className="flex flex-col gap-6">
                
                {/* Section Title - Desktop: 20px, Mobile: 16px - Orbitron */}
                {section.title && (
                  <h2 className="font-body font-black text-[16px] md:text-[20px] leading-tight tracking-wider uppercase text-center text-white">
                    {section.title}
                  </h2>
                )}

                {/* Standard Paragraph Content - Desktop: 16px, Mobile: 14px - Inter */}
                {section.content && Array.isArray(section.content) && (
                  <div className="flex flex-col gap-4">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-center">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.content2 && Array.isArray(section.content2) && (
                  <div className="flex flex-col gap-4">
                    {section.content2.map((paragraph, idx) => (
                      <p key={idx} className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Subsections (Definitions, Types of Data, etc.) */}
                {section.subsections && (
                  <div className="flex flex-col gap-6 md:gap-8">
                    {section.subsections.map((sub, idx) => (
                      <div key={idx} className="flex flex-col gap-0">
                        {sub.subTitle && (
                          <h3 className="font-heading font-bold text-[16px] md:text-[20px] text-white text-center">
                            {sub.subTitle}
                          </h3>
                        )}
                        
                        {sub.content && (
                          <p className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-center">
                            {sub.content}
                          </p>
                        )}

                        {sub.contentTitle && (
                          <p className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-start">
                            {sub.contentTitle}
                          </p>
                        )}   

                        {sub.content2 && (
                          <p className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-justify">
                            {sub.content2}
                          </p>
                        )}                    

                        {sub.extraText && (
                           <p className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-start mt-2">
                           {sub.extraText}
                          </p>
                        )}

                        {/* Definition Lists / Retention Lists */}
                        {sub.list && (
                          <div className="flex flex-col gap-0 mt-2">
                            {sub.list.map((item, i) => (
                              <p key={i} className="font-heading text-[14px] md:text-[16px] leading-relaxed text-white text-justify">
                                <span className="font-bold text-white inline md:mr-1">· {item.term} </span>
                                {item.def}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}