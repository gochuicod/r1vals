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

  return (
    <form className="flex flex-col items-start p-0 gap-[14px] w-full h-auto md:h-[259px] bg-transparent text-white font-['Inter']">
        {/* Place Polygon here */}
        <p className="w-full text-white text-[20px] font-inter leading-relaxed opacity-90 text-center">Complete the form below to be considered for the R1VALS Protocol.</p>

      {/* Frame 143726084: Top Row (Name, Email, Phone) */}
      <div className="flex flex-col md:flex-row items-start px-2 gap-2 w-full self-stretch flex-none">
        <InputGroup 
          label="Full Name:" 
          placeholder="e.g., Alex Smith" 
          value={formData.fullName}
          onChange={(v: string) => setFormData({...formData, fullName: v})}
        />
        <InputGroup 
          label="Email Address:" 
          placeholder="name@example.com" 
          value={formData.email}
          onChange={(v: string) => setFormData({...formData, email: v})}
        />
        <InputGroup 
          label="Phone Number:" 
          placeholder="(555) 000-0000" 
          value={formData.phone}
          onChange={(v: string) => setFormData({...formData, phone: v})}
        />
      </div>

      {/* Frame 143726085: Bottom Row */}
      <div className="flex flex-col md:flex-row items-start px-2 gap-2 w-full self-stretch flex-none">
        
        {/* Interests Section */}
        <div className="flex flex-col justify-center items-start p-2 gap-4 w-full md:w-[482px] flex-grow">
          <label className="text-[14px] font-bold leading-[19px]">I am interested in:</label>
          
          <div className="flex flex-col items-start p-0 gap-2 w-full">
            <CheckboxOption 
              id="team"
              label="Registering a full team (Early Bird Discount applies!)" 
              checked={formData.interest === 'team'}
              onChange={() => setFormData({...formData, interest: 'team'})}
            />
            <CheckboxOption 
              id="individual"
              label="Joining as an individual player (No team yet)" 
              checked={formData.interest === 'individual'}
              onChange={() => setFormData({...formData, interest: 'individual'})}
            />
            <CheckboxOption 
              id="sponsor"
              label="Partnering / Sponsoring the event" 
              checked={formData.interest === 'sponsor'}
              onChange={() => setFormData({...formData, interest: 'sponsor'})}
            />
          </div>
        </div>

        {/* Team & Social Section */}
        <div className="flex flex-col justify-center items-start p-0 gap-2 w-full md:w-[236px] max-w-[236px] flex-none">
          <InputGroup 
            label="Team Name (If Applicable):" 
            placeholder="-" 
            value={formData.teamName}
            onChange={(v: string) => setFormData({...formData, teamName: v})}
          />
          <InputGroup 
            label="Social Media / Website" 
            placeholder="-" 
            value={formData.social}
            onChange={(v: string) => setFormData({...formData, social: v})}
          />
        </div>
      </div>

    {/* Place Polygon here */}

      <div className="w-full flex justify-end mt-4">
        <Button type="submit" variant="default" size="lg">
          Secure My Spot
        </Button>
      </div>
      
      <div className="flex flex-col gap-2">
        <p className="text-[12px] text-white text-body font-heading">
          Why Register Now? </p>
        <ul className="list-disc list-inside text-[12px] text-white text-body font-heading">
          <li>Priority Selection: R1VALS is a curated tournament; early applicants get first priority.</li>
          <li>Tiered Pricing: The registration fee increases as we get closer to the event.</li>
          <li>Scout Visibility: Get your team on the radar of our global streaming partners and scouts early.</li>
          </ul>
      </div>
    </form>
    
  );
};

/* --- Sub-Components --- */

const InputGroup = ({ label, placeholder, value, onChange }: any) => (
  <div className="flex flex-col justify-center items-start p-2 gap-2 w-full md:w-[236.67px] flex-grow">
    <label className="text-[14px] font-bold leading-[19px] whitespace-nowrap">{label}</label>
    <div className="box-border flex flex-row items-center px-4 py-2 gap-2 w-full h-[35px] border border-white flex-none self-stretch">
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-none outline-none italic font-normal text-[16px] leading-[19px] text-[#797979] placeholder:text-[#797979]"
      />
    </div>
  </div>
);

const CheckboxOption = ({ label, id, checked, onChange }: any) => (
  <label className="flex flex-row justify-center items-start px-4 py-0 gap-2 w-full md:w-[466px] h-auto cursor-pointer group">
    <div className="relative flex-none">
      <input 
        type="radio" 
        name="interest"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only" 
      />
      <div className={`box-border w-5 h-5 border border-white transition-colors ${checked ? 'bg-white/20' : 'bg-transparent'}`}>
        {checked && <div className="w-full h-full flex items-center justify-center text-[10px]">✓</div>}
      </div>
    </div>
    <span className="flex-grow font-normal text-[14px] leading-[17px] text-white">
      {label}
    </span>
  </label>
);

export default ContactForm;