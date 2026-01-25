'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";

export default function Contact() {
  const POLYGONS = {
    mobile: 'polygon(0% 10%, 25% 3%, 50% 12%, 75% 5%, 100% 15%, 100% 100%, 0% 100%)',
    tablet: 'polygon(0% 12%, 20% 5%, 45% 15%, 65% 4%, 85% 12%, 100% 8%, 100% 100%, 0% 100%)',
    desktop: 'polygon(0% 15%, 18% 4%, 38% 14%, 55% 2%, 72% 12%, 88% 5%, 100% 15%, 100% 100%, 0% 100%)',
  };

  return (
    <section 
      className="contact-section relative w-full min-h-[1100px] bg-black" 
      style={{ clipPath: 'var(--contact-polygon)' }}
    >
      <style jsx>{`
        .contact-section {
          --contact-polygon: ${POLYGONS.mobile};
          padding-top: 150px; 
          margin-top: -100px; 
        }
        @media (min-width: 768px) {
          .contact-section { --contact-polygon: ${POLYGONS.tablet}; }
        }
        @media (min-width: 1440px) {
          .contact-section { --contact-polygon: ${POLYGONS.desktop}; }
        }
      `}</style>

      {/* --- REGISTRATION CONTENT WRAPPER --- */}
      <div className="container mx-auto bg-[#020023] min-w-full max-h-[840px] mt-10 relative overflow-visible">
        <div className="flex flex-col lg:flex-row h-full">

          {/* LEFT COLUMN (40%) - Hidden on mobile/md */}
          <div className="hidden lg:flex lg:w-[40%] relative items-end justify-center min-h-[400px]">
            <div className="relative w-[517px] h-[784px] -bottom-28">
                <Image
                    src="/contact/contact-img.png"
                    alt="Registration Player"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
          </div>

          {/* RIGHT COLUMN (60%) */}
          <div className="flex flex-col w-full lg:w-[60%] items-start pt-[120px] pb-20 px-6 lg:px-12 relative">
            
            {/* ABSOLUTE BANNER - Positioned relative to this right div */}
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[424px] h-[113px] z-20">
              <div className="relative w-full h-full flex items-center justify-center">
    
              </div>
            </div>

            {/* FLEX CONTENT FLOW */}
            <div className="flex flex-col gap-6 w-full max-w-[742px] ">
              <h2 className="text-white text-h3 text-[32px] lg:text-[40px] font-bold">
                Are you ready to change your life?
              </h2>

              <p className="text-white text-[18px] md:text-[20px] font-inter leading-relaxed opacity-90">
                Whether you have a powerhouse squad ready to dominate or you're a solo player looking to join the ranks, we want to hear from you.
              </p>

              {/* Offer Box */}

                {/* Contact Form */}
                <ContactForm />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}