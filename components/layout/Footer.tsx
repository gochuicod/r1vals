'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Instagram, Mail, Phone } from 'lucide-react';
import { ContactModal } from '@/components/ui/ContactModal'; // Import the new modal

// 1. Configuration Constants
const CONTACT_NUMBER = '+63 917 507 4014';

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/r1vals.sports',
    label: 'Instagram',
  },
  {
    icon: Mail,
    href: 'mailto:info@r1vals.com',
    label: 'Mail',
  },
  {
    icon: Phone,
    href: '#',
    label: 'Phone',
  },
];

const POLYGONS = {
  mobile: 'polygon(0% 10%, 30% 20%, 50% 0%, 100% 20%, 100% 100%, 0% 100%)',
  tablet:
    'polygon(0% 10%, 15% 20%, 25% 0%, 55% 30%, 100% 5%, 100% 100%, 0% 100%)',
  desktop:
    'polygon(0% 15%, 8% 25%, 15% 0%, 30% 30%, 55% 5%, 65% 25%, 85% 10%, 95% 20%, 100% 0%, 100% 100%, 0% 100%)',
};

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
      <footer className="w-full bg-black">
        {/* 2. Responsive Shape Container */}
        <div
          className={cn(
            'bg-primary-deep text-white',
            'lg:px-[182px] px-[34px]',
            'md:pt-[114px] pt-[70px] pb-[51px]',
          )}
          style={
            {
              clipPath: `var(--footer-polygon)`,
            } as React.CSSProperties
          }
        >
          {/* Responsive Polygon Logic */}
          <style jsx>{`
            div {
              --footer-polygon: ${POLYGONS.mobile};
            }
            @media (min-width: 768px) {
              div {
                --footer-polygon: ${POLYGONS.tablet};
              }
            }
            @media (min-width: 1440px) {
              div {
                --footer-polygon: ${POLYGONS.desktop};
              }
            }
          `}</style>

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
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
              {['privacy', 'terms'].map((link) => (
                <Link
                  key={link}
                  href={`/#${link}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {link}
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
