'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

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
    { href: '/#wild-events', hash: '#wild-events', label: 'wild events' },
    { href: '/#legends', hash: '#legends', label: 'legends' },
    { href: '/#chaos-league', hash: '#chaos-league', label: 'chaos league' },
    { href: '/#watch-live', hash: '#watch-live', label: 'watch live' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center px-[80px] py-[20px] bg-black/35 max-h-[75px]">
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
                'transition-all duration-200 hover:text-yellow-400',
                isActive
                  ? 'text-yellow-400 underline underline-offset-4 decoration-yellow-400'
                  : 'text-inherit',
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <Button href="#contact" variant="yellow" size="sm" smoothScroll={true}>
          Register Now!
        </Button>
      </div>
    </div>
  );
}
