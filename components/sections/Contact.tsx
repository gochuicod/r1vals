'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { BrushedOfferContainer } from "../ui/BrushedOfferContainer";
import { RegistrationBanner } from "../ui/RegistrationBanner";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full h-auto bg-black flex flex-col items-center justify-center py-12 lg:py-20 overflow-x-hidden">              
        {/* INNER CONTAINER */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center px-4 md:px-8">

      {/* LEFT COLUMN (40%) */}
      <div className="relative w-full lg:w-[40%] h-[480px] md:h-[580px] lg:h-[775px] flex items-center justify-center overflow-visible md:top-40">
        <div className="relative w-full h-full 
          scale-125
          lg:scale-[1.3] 
          transition-all duration-500 ease-in-out">
          <Image
            src="/contact/contact-img-new.webp"
            alt="Registration Player"
            fill
            className="hidden lg:flex object-contain -translate-y-60 -translate-x-6"
            priority
          />
          <Image
            src="/contact/contact-img-new-mobile.webp"
            alt="Registration Player"
            fill
            className="lg:hidden flex object-contain md:-translate-y-16 md:translate-x-2 translate-y-4 translate-x-2"
            priority
          />
        </div>
      </div>

          {/* RIGHT COLUMN (60%) */}
          <div className="flex flex-col flex-1 w-full lg:w-[60%] lg:max-w-[742px] justify-center items-center lg:mt-0 overflow-visible z-10 -mt-20">

            <div className="flex w-full relative z-10 justify-center lg:mb-0 lg:justify-start lg:left-2">
               <RegistrationBanner />
            </div>

            {/* FLEX CONTENT FLOW */}
            <div className="flex flex-col gap-6 w-full">
              <div className="space-y-4">
                <h2 className="text-white text-center lg:text-left text-[28px] md:text-[32px] lg:text-[40px] font-black tracking-[0.04em] leading-12">
                    Are you ready to change your life?
                </h2>

                <p className="font-heading text-white text-center lg:text-start text-[16px] lg:text-[20px] opacity-90">
                    Whether you have a powerhouse squad ready to dominate or you're a solo player looking to join the ranks, we want to hear from you.
                </p>
              </div>

              <div className="w-full flex justify-center items-center">
                <BrushedOfferContainer>
                    <p className="flex flex-col lg:max-w-[700px] md:max-w-[500px] max-w-full font-heading font-normal tracking-[0%] text-[16px] lg:text-[20px] text-center text-white p-4">
                        <span className="font-bold text-[#FCC800]">FooLIMITED OFFER:</span>Register your team early to unlock a Tiered Registration Discount. Secure your spot before the bracket fills up!
                    </p>
                </BrushedOfferContainer>
              </div>

              {/* Form Container */}
              <div className="w-full">
                <ContactForm />
              </div>

              <div className="flex flex-col items-start p-0 gap-2 w-full">
                {/* Header */}
                <h3 className="text-white/90 text-sm font-heading">
                  Why Register Now?
                </h3>

                {/* List Container - Fixed with text-sm and antialiasing */}
                <ul className="flex flex-col items-start p-0 gap-0 w-full self-stretch text-[14px] antialiased font-heading">
                  
                  {/* Bullet Item 1 */}
                  <li className="flex items-center gap-2 text-white/80 leading-10">
                    {/* Centered Bullet Dot */}
                    <span className="h-1 w-1 rounded-full bg-white shrink-0" />
                    <p>
                      <span >Priority Selection:</span> R1VALS is a curated tournament; early applicants get first priority.
                    </p>
                  </li>

                  {/* Bullet Item 2 */}
                  <li className="flex items-center gap-2 text-white/80 leading-10">
                    <span className="h-1 w-1 rounded-full bg-white shrink-0" />
                    <p>
                      <span>Tiered Pricing:</span> The registration fee increases as we get closer to the event.
                    </p>
                  </li>

                  {/* Bullet Item 3 */}
                  <li className="flex items-center gap-2 text-white/80 leading-10">
                    <span className="h-1 w-1 rounded-full bg-white shrink-0" />
                    <p>
                      <span>Scout Visibility:</span> Get your team on the radar of our global streaming partners and scouts early.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}