"use client";

import { Button } from '@/components/ui/Button';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    teamName: '',
    social: ''
  });

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="w-full max-w-5xl mx-auto font-['Inter'] text-white">
      <form className="flex flex-col gap-6 w-full bg-transparent p-2 md:p-0 font-heading">
        
        {/* Header Section */}
        <div className="text-center justify-center">
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Complete the form below to be considered for the R1VALS Protocol.
            </p>
        </div>

        {/* --- FLEX ROW 1: Contact Details --- */}
        {/* On mobile: Column. On Desktop: Row with 3 equal parts */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1">
                <InputGroup 
                    label="Full Name" 
                    placeholder="e.g., Alex Smith" 
                    value={formData.fullName}
                    onChange={(v: string) => handleChange('fullName', v)}
                />
            </div>
            <div className="flex-1">
                <InputGroup 
                    label="Email Address" 
                    type="email"
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={(v: string) => handleChange('email', v)}
                />
            </div>
            <div className="flex-1">
                <InputGroup 
                    label="Phone Number" 
                    type="tel"
                    placeholder="(555) 000-0000" 
                    value={formData.phone}
                    onChange={(v: string) => handleChange('phone', v)}
                />
            </div>
        </div>

        {/* --- FLEX ROW 2: Interests & Extra Info --- */}
        {/* On mobile: Column. On Desktop: Row (2/3 Interest, 1/3 Details) */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
            
            {/* Left Column: Interests (Takes more space) */}
            <div className="flex flex-col gap-3 md:flex-[2]">
                <label className="text-sm font-bold tracking-wide text-white/80">I AM INTERESTED IN:</label>
                <div className="flex flex-col gap-1">
                    <RadioOption 
                        id="team"
                        label="Registering a full team (Early Bird Discount applies!)" 
                        checked={formData.interest === 'team'}
                        onChange={() => handleChange('interest', 'team')}
                    />
                    <RadioOption 
                        id="individual"
                        label="Joining as an individual player (No team yet)" 
                        checked={formData.interest === 'individual'}
                        onChange={() => handleChange('interest', 'individual')}
                    />
                    <RadioOption 
                        id="sponsor"
                        label="Partnering / Sponsoring the event" 
                        checked={formData.interest === 'sponsor'}
                        onChange={() => handleChange('interest', 'sponsor')}
                    />
                </div>
            </div>

            {/* Right Column: Team Info & Submit (Takes less space) */}
            <div className="flex flex-col gap-4 md:flex-[1]">
                 <InputGroup 
                    label="Team Name (If Applicable)" 
                    placeholder="-" 
                    value={formData.teamName}
                    onChange={(v: string) => handleChange('teamName', v)}
                />
                <InputGroup 
                    label="Social Media / Website" 
                    placeholder="-" 
                    value={formData.social}
                    onChange={(v: string) => handleChange('social', v)}
                />
                
                {/* Submit Button aligned to bottom of this column */}
                <div className="mt-auto pt-2">
                    <Button type="submit" variant="default" className='w-full whitespace-nowrap'>
                        Secure My Spot
                    </Button>
                </div>
            </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-4 mt-2">
            <div className="text-xs text-white/80 space-y-1 w-full">
                <p className="font-bold uppercase tracking-wider text-white mb-2">Why Register Now?</p>
                {/* Flex list for horizontal layout on desktop if needed, currently vertical list */}
                <ul className="flex flex-col gap-x-6 gap-y-1">
                    <li>Priority: Early applicants get priority.</li>
                    <li>Pricing: Fees increase closer to event.</li>
                    <li>Visibility: Global partner radar.</li>
                </ul>
            </div>
        </div>
      </form>
    </section>
  );
};

/* --- Sub-Components --- */

const InputGroup = ({ label, placeholder, value, onChange, type = "text" }: any) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-xs md:text-sm font-bold whitespace-nowrap tracking-wide text-white/80 uppercase">{label}</label>
    <div className="relative w-full">
        <input 
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-10 px-4 bg-transparent border border-white text-sm md:text-base text-white placeholder:text-white/40 placeholder:italic focus:outline-none focus:border-white focus:ring-1 focus:ring-white/50 transition-all"
        />
    </div>
  </div>
);

const RadioOption = ({ label, id, checked, onChange }: any) => (
  <div 
    onClick={onChange}
    className="group flex items-start gap-3 cursor-pointer select-none hover:bg-white/5 p-2 -ml-2 rounded-md transition-colors"
  >
    <div className="relative flex-none mt-0.5">
      <input 
        type="radio" 
        name="interest"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only" 
      />
      {/* Custom Box */}
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