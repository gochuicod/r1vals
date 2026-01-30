"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { FormsModal } from '@/components/ui/FormsModal';
import { contactSchema, type ContactFormData } from '@/lib/validators/contact.schema';
import { cn } from '@/lib/utils';
import { TechDivider } from './TechDivider';

const ContactForm = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    type: 'success',
  });

  const formFields = {
    fullName: { label: "Full Name", placeholder: "e.g., Alex Smith" },
    email: { label: "Email Address", placeholder: "name@example.com" },
    phone: { label: "Phone Number", placeholder: "(555) 000-0000" },
    teamName: { label: "Team Name (If Applicable)", placeholder: "-" },
    social: { label: "Social Media / Website", placeholder: "-" },
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      interest: '' as any,
      teamName: '',
      social: ''
    }
  });

  const currentInterest = watch('interest');

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        setModalState({ isOpen: true, type: 'success' });

        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17904183438/K-nRCPnNrewbEI7RsNlC',
            'value': 1.0,
            'currency': 'PHP'
          });
        }

      } else {
        setModalState({ isOpen: true, type: 'error' });
      }
    } catch (error) {
      console.error(error);
      setModalState({ isOpen: true, type: 'error' });
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto font-['Inter'] text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full bg-transparent p-2 md:p-0 font-heading">

      {/* --- CUSTOM DIVIDER (TOP) --- */}
      <TechDivider variant='top'/>
        
        {/* Header Section */}
        <div className="text-center justify-center">
            <p className="text-[16px] lg:text-[20px] text-white/90 leading-relaxed">
                Complete the form below to be considered for the R1VALS Protocol.
            </p>
        </div>

        {/* --- FLEX ROW 1: Contact Details --- */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1">
                <Input 
                    label={formFields.fullName.label}
                    placeholder={formFields.fullName.placeholder}
                    {...register('fullName')}
                    error={errors.fullName?.message}
                />
            </div>
            <div className="flex-1">
                <Input 
                    label={formFields.email.label}
                    type="email"
                    placeholder={formFields.email.placeholder}
                    {...register('email')}
                    error={errors.email?.message}
                />
            </div>
            <div className="flex-1">
                <Input 
                    label={formFields.phone.label}
                    type="tel"
                    placeholder={formFields.phone.placeholder}
                    {...register('phone')}
                    error={errors.phone?.message}
                />
            </div>
        </div>

        {/* --- FLEX ROW 2: Interests & Extra Info --- */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
            
            {/* Interest Selection */}
            <div className="flex flex-col gap-3 md:flex-[2]">
                <label className="text-[16px] font-bold normal-case font-heading tracking-[0%] text-white">I am Interesed in: </label>
                
                {errors.interest && (
                   <span className="text-red-400 text-xs font-semibold">{errors.interest.message}</span>
                )}

                <div className="flex flex-col gap-1">
                    <RadioOption 
                        id="team"
                        label="Registering a full team (Early Bird Discount applies!)" 
                        checked={currentInterest === 'team'}
                        onClick={() => setValue('interest', 'team', { shouldValidate: true })}
                    />
                    <RadioOption 
                        id="individual"
                        label="Joining as an individual player (No team yet)" 
                        checked={currentInterest === 'individual'}
                        onClick={() => setValue('interest', 'individual', { shouldValidate: true })}
                    />
                    <RadioOption 
                        id="sponsor"
                        label="Partnering / Sponsoring the event" 
                        checked={currentInterest === 'sponsor'}
                        onClick={() => setValue('interest', 'sponsor', { shouldValidate: true })}
                    />
                </div>
            </div>

            {/* Extra Details */}
            <div className="flex flex-col gap-4 md:flex-[1]">
                 <Input 
                    label={formFields.teamName.label}
                    placeholder={formFields.teamName.placeholder}
                    {...register('teamName')}
                    error={errors.teamName?.message}
                />
                <Input 
                    label={formFields.social.label}
                    placeholder={formFields.social.placeholder}
                    {...register('social')}
                    error={errors.social?.message}
                />
            </div>
            </div>

                  {/* --- CUSTOM DIVIDER (BOTTOM) --- */}
            <TechDivider variant='bottom'/>


            <div className="flex mt-auto pt-2 w-full items-end justify-end">
              <Button 
                type="submit" 
                variant="yellow"
                size="lg"
                className='w-[272px] text-[20px] text-center '
                disabled={isSubmitting}
                >
                      {isSubmitting ? 'Sending...' : 'Secure My Spot'}
              </Button>
             </div>

        {/* Modal Logic Integration */}
        <FormsModal
            isOpen={modalState.isOpen}
            onClose={() => setModalState({ ...modalState, isOpen: false })}
            type={modalState.type}
        />
      </form>
    </section>
  );
};

/* --- Local Sub-Component --- */
// Kept local as it's specific to this form's design logic
const RadioOption = ({ label, id, checked, onClick }: any) => (
  <div 
    onClick={onClick}
    className="group flex items-start gap-3 cursor-pointer select-none hover:bg-white/5 p-2 -ml-2 rounded-md transition-colors"
  >
    <div className="relative flex-none mt-0.5">
      <input 
        type="radio" 
        id={id}
        checked={checked}
        readOnly
        className="sr-only" 
      />
      <div className={`w-5 h-5 border border-white transition-all flex items-center justify-center ${checked ? 'bg-white text-black' : 'bg-transparent'}`}>
        {checked && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
      </div>
    </div>
    <span className={`text-sm leading-snug transition-opacity ${checked ? 'opacity-100 font-medium' : 'opacity-80'}`}>
      {label}
    </span>
  </div>
);

export default ContactForm;