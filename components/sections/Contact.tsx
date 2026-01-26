'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { BrushedOfferContainer } from "../ui/BrushedOfferContainer";
import { RegistrationBanner } from "../ui/RegistrationBanner";

export default function Contact() {
  return (
    // FIX: Changed h-screen to min-h-screen and removed overflow-hidden 
    // to allow scrolling on mobile devices.
    <section id="contact-section" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-12 lg:py-20 overflow-x-hidden">              
        {/* INNER CONTAINER */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center px-4 md:px-8">

          {/* LEFT COLUMN (40%) - Visible only on Desktop */}
          <div className="hidden lg:flex lg:w-[40%] h-[750px] relative items-end justify-center">
            <div className="relative w-[500px] h-full bottom-10">
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
          <div className="flex flex-col flex-1 w-full lg:w-[60%] lg:max-w-[742px] justify-center relative lg:mt-0 overflow-visible">
            
            {/* BANNER: Positioned more safely for mobile */}
            <div className="relative w-full -left-12 top-6 lg:top-2 lg:-left-16 z-10">
               <RegistrationBanner />
            </div>

            {/* FLEX CONTENT FLOW */}
            <div className="flex flex-col gap-6 w-full">
              <div className="space-y-4">
                <h2 className="text-white text-center lg:text-start text-[28px] md:text-[32px] lg:text-[40px] font-bold tracking-[4%] leading-tight">
                    Are you ready to change your life?
                </h2>

                <p className="font-heading text-[#DDE2FF] text-center lg:text-start text-[16px] md:text-[18px] opacity-90">
                    Whether you have a powerhouse squad ready to dominate or you're a solo player looking to join the ranks, we want to hear from you.
                </p>
              </div>

              <div className="w-full">
                <BrushedOfferContainer>
                    <p className="font-heading tracking-widest text-xs md:text-sm lg:text-base text-center text-white py-2 px-4">
                       <span className="font-bold">FooLIMITED OFFER:</span> Register your team early to unlock a Tiered Registration Discount. Secure your spot before the bracket fills up!
                    </p>
                </BrushedOfferContainer>
              </div>

              {/* Form Container */}
              <div className="w-full">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}