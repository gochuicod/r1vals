'use client';

import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Instagram, Mail, Phone } from 'lucide-react';

// 1. Configuration Constants
const SOCIAL_LINKS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Mail' },
  { icon: Phone, href: '#', label: 'Phone' },
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

  return (
    <footer className="w-full">
      {/* 2. Responsive Shape Container */}
      <div
        className={cn(
          'bg-primary-700 text-white',
          'lg:px-[182px] px-[34px]',
          'md:pt-[114px] pt-[70px] pb-[51px]',
        )}
        style={
          {
            clipPath: `var(--footer-polygon)`,
          } as React.CSSProperties
        }
      >
        {/* Responsive Polygon Logic via inline style tag for simplicity/locality */}
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
            {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="h-[35px] w-[35px] bg-primary-900 flex justify-center items-center text-brandRed-400 hover:bg-primary-800 transition-colors cursor-pointer"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>

          {/* 4. Copyright Section */}
          <span className="font-space_grotesk font-normal text-sm order-3 md:order-none">
            &copy; {currentYear} R1VALS
          </span>

          {/* 5. Legal Links Section */}
          <div className="flex items-center gap-6 text-xs font-bold uppercase">
            {['privacy', 'terms', 'cookies'].map((link) => (
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
  );
}
