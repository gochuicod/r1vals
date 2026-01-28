'use client';

import React from 'react';
import { TERMS_CONDITIONS_CONTENT } from '@/constants'; // Import the new content
import HeroImage from '@/components/ui/HeroImage';

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white overflow-x-hidden">
      
      <div className="flex-shrink-0 w-full h-auto">
        <HeroImage 
          desktopSrc="/privacy/hero-desktop-2.webp" 
          tabletSrc="/privacy/hero-tablet-2.webp"   
          mobileSrc="/privacy/hero-mobile-2.webp" 
          alt="R1VALS Terms and Conditions"
        />
      </div>

      <section className="z-10 -mt-20 md:-mt-40 lg:mt-0 md:px-8 px-4 pb-24 flex flex-col items-center">
        
        <div className="w-full max-w-[912px] flex flex-col gap-10">

          {/* PAGE HEADER */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="font-body font-black text-[32px] md:text-[40px] leading-tight tracking-widest text-[#FCC800] uppercase">
              Terms and Conditions
            </h1>
            <p className="font-heading text-base md:text-[20px] text-gray-300">
              Last updated: January 28, 2026
            </p>
          </div>

          {/* DYNAMIC CONTENT LOOP */}
          <div className="flex flex-col gap-12">
            {TERMS_CONDITIONS_CONTENT.map((section) => (
              <div key={section.id} className="flex flex-col gap-6">
                
                {/* Section Title */}
                {section.title && (
                  <h2 className="font-body font-black text-[20px] leading-tight tracking-wider uppercase text-center text-white">
                    {section.title}
                  </h2>
                )}

                {/* Standard Paragraph Content */}
                {section.content && Array.isArray(section.content) && (
                  <div className="flex flex-col gap-4">
                    {section.content.map((paragraph, idx) => (
                      <p key={idx} className="font-heading text-base leading-relaxed text-gray-200 text-center md:text-center">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Subsections (Definitions, Security, etc.) */}
                {section.subsections && (
                  <div className="flex flex-col gap-8">
                    {section.subsections.map((sub, idx) => (
                      <div key={idx} className="flex flex-col gap-3">
                        {sub.subTitle && (
                          <h3 className="font-heading font-bold text-[20px] text-white text-center">
                            {sub.subTitle}
                          </h3>
                        )}
                        
                        {sub.content && (
                          <p className="font-heading text-base leading-relaxed text-gray-200 text-center md:text-center">
                            {sub.content}
                          </p>
                        )}

                        {sub.extraText && (
                           <p className="font-heading text-base leading-relaxed text-gray-200 text-center md:text-center mt-2">
                           {sub.extraText}
                         </p>
                        )}

                        {/* List items (used in User Accounts or Definitions) */}
                        {sub.list && (
                          <div className="flex flex-col gap-4 mt-2">
                            {sub.list.map((item, i) => (
                              <p key={i} className="font-heading text-base leading-relaxed text-gray-200 text-left">
                                <span className="font-bold text-white">{item.term}</span> {item.def}
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