'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { BrushedOfferContainer } from "../ui/BrushedOfferContainer";
import { RegistrationBanner } from "../ui/RegistrationBanner";

export default function Contact() {
  return (
    <section id="contact-section" className="relative w-full h-full min-h-[1100px] bg-black pt-[150px] overflow-x-hidden flex flex-col items-center">
      
      {/* OUTER CONTAINER (The Background): 
         1. Changed 'max-w-7xl' to 'w-full'. This makes the blue background stretch edge-to-edge.
         2. Kept height and margin properties here.
      */}
      <div className="w-full bg-[#020023] h-auto lg:max-h-[840px] my-auto relative overflow-visible mb-[250px]">
        
        {/* INNER CONTAINER (The Content):
           1. Added 'max-w-7xl mx-auto'. This constrains the columns so they stay centered 
              and don't stretch to the far edges of ultra-wide screens.
           2. Added 'h-full' to ensure it fills the blue parent.
        */}
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-center">

          {/* LEFT COLUMN (40%) */}
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
          <div className="flex flex-col flex-1 w-full lg:w-[60%] lg:max-w-[742px] items-start pt-[140px] pb-20 px-4 sm:px-6 relative">
            
            {/* BANNER */}
            <div className="absolute w-full top-10 left-0 lg:-left-4">
               <RegistrationBanner />
            </div>

            {/* FLEX CONTENT FLOW */}
            <div className="flex flex-col gap-6 w-full flex-1">
              <h2 className="text-white text-center lg:text-start text-[32px] lg:text-[40px] font-bold tracking-[4%] leading-[48px]">
                Are you ready to change your life?
              </h2>

              <p className="font-heading text-[#DDE2FF] text-center lg:text-start text-[18px] md:text-[20px]">
                Whether you have a powerhouse squad ready to dominate or you're a solo player looking to join the ranks, we want to hear from you.
              </p>

              <BrushedOfferContainer>
                 <p className="font-heading tracking-widest text-lg text-center text-white">
                    <span className="font-bold">FooLIMITED OFFER:</span> FooLIMITED OFFER: Register your team early to unlock a Tiered Registration Discount. Secure your spot before the bracket fills up!
                 </p>
              </BrushedOfferContainer>

              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}