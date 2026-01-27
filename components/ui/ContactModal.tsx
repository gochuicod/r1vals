'use client';

import { useState } from 'react';
import { X, Copy, Check, UserPlus, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_DETAILS = {
  name: 'R1VALS Sports',
  number: '+63 917 507 4014',
  rawNumber: '+639175074014', // Clean number for dialer/vcard
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Function to generate and download vCard
  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${CONTACT_DETAILS.name}
TEL;TYPE=CELL:${CONTACT_DETAILS.rawNumber}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'R1VALS_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_DETAILS.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-zinc-900 border border-white/20 p-8 rounded-lg shadow-2xl animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center gap-6">
          {/* Header Icon */}
          <div className="p-4 rounded-full bg-primary-deep/20 text-brandRed-400 border border-white/10">
            <Phone size={32} />
          </div>

          <div className="space-y-1">
            <h3 className="text-[24px] font-bold text-white font-body">
              Contact Us
            </h3>
            <p className="text-white/70 font-heading text-lg">
              {CONTACT_DETAILS.number}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-3">
            {/* Option 1: Save to Contacts */}
            <Button
              className="w-full flex items-center justify-center gap-2"
              onClick={handleSaveContact}
              variant="yellow"
            >
              <UserPlus size={20} className="me-2" />
              Save to Contacts
            </Button>

            {/* Option 2: Copy to Clipboard */}
            <Button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 !cursor-pointer"
              variant="protocol" // Changed to protocol variant
            >
              {copied ? (
                <div className="w-full flex items-center justify-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </div>
              ) : (
                <div className="w-full flex items-center justify-center gap-2">
                  <Copy size={20} />
                  <span>Copy Number</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
