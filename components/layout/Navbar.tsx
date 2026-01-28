'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import Drawer from '@/components/ui/drawer';

export default function Navbar() {
  const [activeHash, setActiveHash] = React.useState('');
  React.useEffect(() => {
    const handleSync = () => setActiveHash(window.location.hash);
    handleSync();

    window.addEventListener('hashchange', handleSync);
    window.addEventListener('popstate', handleSync);
    return () => {
      window.removeEventListener('hashchange', handleSync);
      window.removeEventListener('popstate', handleSync);
    };
  }, []);

  // Define navigation links
  const navlinks = [
    {
      href: '/#tournament-info',
      hash: '#tournament-info',
      label: 'tournament info',
    },
    { href: '/#about', hash: '#about', label: 'about' },
    { href: '/#Mission', hash: '#Mission', label: 'mission' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 lg:px-[80px] lg:py-[20px] bg-black/35 max-h-[75px]">
      <Link href="/" onClick={() => setActiveHash('')}>
        <Image
          src="/r1vals_logo.svg"
          alt="R1Vals Logo"
          width={113}
          height={37}
          priority
        />
      </Link>

      <div className="lg:flex hidden flex-row items-center text-[#E8F5E8] text-[11px] gap-6 uppercase leading-[16px]">
        {navlinks.map((link) => {
          const isActive = activeHash !== '' && link.href.includes(activeHash);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveHash(link.hash)}
              className={cn(
                'transition-all duration-200 hover:text-[#FCC800]',
                isActive
                  ? 'text-[#FCC800] underline underline-offset-4 decoration-[#FCC800]'
                  : 'text-inherit',
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <Button href="#contact" variant="yellow" size="lg" smoothScroll={true}>
          Register Now!
        </Button>
      </div>

      <div className="lg:hidden block">
        <Drawer triggerIcon={<>Open</>} side="top" size={'40vw'}>
          <div className="flex flex-col items-end h-full text-body-lg uppercase gap-6 text-[#E8F5E8]">
            {navlinks.map((link) => {
              const isActive =
                activeHash !== '' && link.href.includes(activeHash);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHash(link.hash)}
                  className={cn(
                    'transition-all duration-200 hover:text-[#FCC800]',
                    isActive
                      ? 'text-[#FCC800] underline underline-offset-4 decoration-[#FCC800]'
                      : 'text-inherit',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </Drawer>
      </div>
    </div>
  );
}
