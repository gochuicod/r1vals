'use client';

import Image from "next/image";
import ContactForm from "../ui/ContactForm";
import { BrushedOfferContainer } from "../ui/BrushedOfferContainer";
import { RegistrationBanner } from "../ui/RegistrationBanner";


export default function Contact() {
  return (
    <section id="contact-section" className="relative w-full h-full min-h-[1100px] bg-black pt-[150px]">
      
      <div className="container mx-auto bg-[#020023] min-w-full max-h-[840px] my-auto relative overflow-visible mb-[250px]">
        <div className="flex flex-col lg:flex-row h-full">

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
            <div className="flex flex-col flex-1 w-full lg:w-[60%] lg:max-w-[742px] items-start pt-[140px] pb-20 px-6 relative">
            
            {/* --- MOVED BANNER HERE --- */}
            {/* Positioned absolutely so it sits in the top-left corner of the right column */}
            <div className="absolute w-full top-10 -left-4 ">
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