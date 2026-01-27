'use client';

import { useState } from 'react';
import { X, Copy, Check, Phone, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS } from '@/constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // --- HANDLERS ---

  // Trigger native dialer
  const handleCall = () => {
    window.location.href = `tel:${CONTACT_DETAILS.rawNumber}`;
  };

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_DETAILS.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- RENDER ---

  return (
    <div
      className={cn(
        // Layout & Positioning
        'fixed inset-0 z-50 flex items-center justify-center',
        // Background & Visuals
        'bg-black/80 backdrop-blur-sm',
        // Spacing
        'p-4',
      )}
    >
      {/* Modal Container */}
      <div
        className={cn(
          // Layout
          'relative w-full max-w-md',
          // Visuals
          'bg-zinc-900 border border-white/20 rounded-lg shadow-2xl',
          // Spacing
          'p-8',
          // Animation
          'animate-in fade-in zoom-in duration-200',
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={cn(
            'absolute top-4 right-4',
            'text-white/50 hover:text-white transition-colors',
          )}
        >
          <X size={20} />
        </button>

        {/* Content Wrapper */}
        <div className={cn('flex flex-col items-center text-center gap-6')}>
          {/* Header Icon */}
          <div
            className={cn(
              'p-4 rounded-full',
              'bg-primary-deep/20 border border-white/10',
              'text-brandRed-400',
            )}
          >
            <Phone size={32} />
          </div>

          {/* Text Details */}
          <div className="space-y-1">
            <h3 className={cn('text-[24px] font-bold text-white font-body')}>
              Contact Us
            </h3>
            <p className={cn('text-white/70 font-heading text-lg')}>
              {CONTACT_DETAILS.number}
            </p>
          </div>

          {/* Action Buttons */}
          <div className={cn('w-full flex flex-col gap-3')}>
            {/* Option 1: Call Number (Replaces Save Contact) */}
            <Button
              onClick={handleCall}
              variant="yellow"
              className={cn('w-full flex items-center justify-center gap-2')}
            >
              <PhoneCall size={20} className="me-2" />
              Call Now
            </Button>

            {/* Option 2: Copy to Clipboard */}
            <Button
              onClick={handleCopy}
              variant="protocol"
              className={cn(
                'w-full flex items-center justify-center gap-2 !cursor-pointer',
              )}
            >
              {copied ? (
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
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
