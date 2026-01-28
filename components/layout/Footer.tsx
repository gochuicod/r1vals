'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { ContactModal } from '@/components/ui/ContactModal'; // Import the new modal

import { SOCIAL_LINKS, CONTACT_NUMBER, LEGAL_LINKS } from '@/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSocialClick = (e: React.MouseEvent, label: string) => {
    // Intercept the click for the Phone label
    if (label === 'Phone') {
      e.preventDefault();
      // Copy to clipboard
      navigator.clipboard.writeText(CONTACT_NUMBER);
      // Open the modal
      setIsContactModalOpen(true);
    }
  };

  return (
    <>
      <footer className="w-full bg-black relative">
        {/* 2. Responsive Shape Container */}
        <div
          className={cn(
            'bg-black text-white relative',
            'lg:px-[182px] px-[34px]',
            'md:pt-[114px] pt-[120px] pb-[51px]',
          )}
        >
          <Image
            src="/footer/footer_bg.png"
            alt="Footer Background"
            layout="fill"
            objectFit="cover"
            // It's good practice to keep the background Z-index low (e.g., z-0)
            className="z-0 absolute top-0 left-0"
          />
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0 z-[100] relative">
            {/* 3. Social Media Section */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleSocialClick(e, label)}
                  target={
                    label === 'Phone' || href.startsWith('mailto')
                      ? undefined
                      : '_blank'
                  }
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-[35px] w-[35px] bg-primary-900 flex justify-center items-center text-brandRed-400 hover:bg-primary-800 transition-colors cursor-pointer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* 4. Copyright Section */}
            <span className="font-space_grotesk font-normal text-sm order-3 md:order-none">
              &copy; {currentYear} R1VALS
            </span>

            {/* 5. Legal Links Section */}
            <div className="flex items-center gap-6 text-xs font-bold uppercase">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}                  
                  className="hover:text-primary-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal Component */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
