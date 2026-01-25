'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { BrushedOfferContainer } from "../ui/BrushedOfferContainer";


export default function Contact() {
  return (
    <section 
      id="contact-section"
      className="relative w-full min-h-[1100px] bg-black pt-[150px]"
    >

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
            <div className="flex flex-col gap-6 w-full lg:max-w-[742px]  ">
              <h2 className="text-white text-center lg:text-start text-h3 text-[32px] lg:text-[40px] font-bold tracking-[4%] leading-[48px]">
                Are you ready to change your life?
              </h2>

              <p className="font-heading text-white text-center lg:text-start text-[18px] md:text-[20px]">
                Whether you have a powerhouse squad ready to dominate or you're a solo player looking to join the ranks, we want to hear from you.
              </p>

              {/* Offer Box Added Here */}
              <BrushedOfferContainer>
                 <p className="font-heading tracking-widest text-lg text-center lg:text-start">
                    <span className="font-bold">FooLIMITED OFFER:</span> Register your team early to unlock a Tiered Registration Discount. Secure your spot before the bracket fills up!
                 </p>
              </BrushedOfferContainer>

                {/* Contact Form */}
                <ContactForm />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}