'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { BrushedOfferContainer } from "../ui/BrushedOfferContainer";
import { RegistrationBanner } from "../ui/RegistrationBanner";

export default function Contact() {
  return (
    // CHANGE 1: h-screen, max-h-screen, overflow-hidden enforces one view (no scroll)
    <section id="contact-section" className="relative w-full h-screen max-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
              
        {/* INNER CONTAINER (The Content) */}
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-center items-center">

          {/* LEFT COLUMN (40%) - Image */}
          {/* Adjusted alignment to center/bottom without pushing layout out */}
          <div className="hidden lg:flex lg:w-[40%] h-full relative items-end justify-center">
            <div className="relative w-[500px] h-[750px] bottom-40 scale-[1]">
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
          {/* Added h-full and justify-center to center form vertically */}
          <div className="flex flex-col flex-1 w-full lg:w-[60%] lg:max-w-[742px] h-full justify-center px-4 sm:px-6 relative pt-16">
            
            {/* BANNER */}
            {/* Positioned relative to the column padding */}
            <div className="absolute w-full top-10 left-2 lg:-left-12">
               <RegistrationBanner />
            </div>

            {/* FLEX CONTENT FLOW */}
            <div className="flex flex-col gap-4 w-full mt-20">
              <div className="space-y-2">
                <h2 className="text-white text-center lg:text-start text-[32px] lg:text-[40px] font-bold tracking-[4%] leading-tight">
                    Are you ready to change your life?
                </h2>

                <p className="font-heading text-[#DDE2FF] text-center lg:text-start text-[16px] md:text-[18px]">
                    Whether you have a powerhouse squad ready to dominate or you're a solo player looking to join the ranks, we want to hear from you.                </p>
              </div>

              <BrushedOfferContainer>
                  <p className="font-heading tracking-widest text-sm md:text-base text-center text-white py-1">
                     <span className="font-bold">FooLIMITED OFFER:</span> Register your team early to unlock a Tiered Registration Discount. Secure your spot before the bracket fills up!
                  </p>
              </BrushedOfferContainer>

              <ContactForm />
            </div>

          </div>
        </div>
    </section>
  );
}