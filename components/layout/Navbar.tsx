'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { MenuDropDown, MenuButton, MenuButtonRef } from '../ui/MenuUI';
import { set } from 'zod';

export default function Navbar() {
  const [activeHash, setActiveHash] = React.useState('');
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuBtnRef = React.useRef<MenuButtonRef>(null);
  const scrollTo = useSmoothScroll();

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
    { href: '/#mission', hash: '#mission', label: 'mission' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[1000] py-4 px-6 lg:px-[80px] lg:py-[20px] bg-black/60 backdrop-blur-xl">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => {
              setActiveHash('');
              scrollTo(e, '');
            }}
          >
            <Image
              src="/r1vals_logo.svg"
              alt="R1Vals Logo"
              width={113}
              height={37}
              priority
            />
          </Link>
          <MenuButton
            ref={menuBtnRef}
            open={openMenu}
            onToggle={() => setOpenMenu((v) => !v)}
          />
          <div className="lg:flex hidden flex-row items-center text-[#E8F5E8] text-[11px] gap-6 uppercase leading-[16px]">
            {navlinks.map((link) => {
              const isActive =
                activeHash !== '' && link.href.includes(activeHash);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setActiveHash(link.hash); // Keep updating active state
                    scrollTo(e, link.href); // Smooth scroll
                  }}
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
            <Button
              href="#contact"
              variant="yellow"
              size="lg"
              smoothScroll={true}
            >
              Register Now!
            </Button>
          </div>
        </div>
        <MenuDropDown
          className="text-white flex flex-col capitalize gap-4 mt-4"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
            menuBtnRef.current?.close();
          }}
        >
          {navlinks.map((link) => {
            const isActive =
              activeHash !== '' && link.href.includes(activeHash);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setActiveHash(link.hash); // Keep updating active state
                  scrollTo(e, link.href); // Smooth scroll
                  setOpenMenu(false);
                  menuBtnRef.current?.close();
                }}
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
          <div>
            <Button
              href="#contact"
              variant="yellow"
              size="sm"
              smoothScroll={true}
              onClick={() => {
                setOpenMenu(false);
                menuBtnRef.current?.close();
              }}
            >
              Register Now!
            </Button>
          </div>
        </MenuDropDown>
      </div>
    </>
  );
}
