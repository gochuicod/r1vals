'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { MenuDropDown, MenuButton, MenuButtonRef } from '../ui/MenuUI';

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
      {/* Click-outside catcher */}
      {openMenu && (
        <div
          className="fixed inset-0 z-[999]"
          onClick={() => {
            setOpenMenu(false);
            menuBtnRef.current?.close();
          }}
          aria-hidden
        />
      )}

      {/* Navbar */}
      <div
        className="fixed top-0 left-0 w-full z-[1000] p-4 lg:px-24 lg:py-6 bg-black/60 backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top row */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => {
              setActiveHash('');
              scrollTo(e, '');
              setOpenMenu(false);
              menuBtnRef.current?.close();
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

          {/* Mobile menu button */}
          <MenuButton
            ref={menuBtnRef}
            open={openMenu}
            onToggle={() => setOpenMenu((v) => !v)}
            className="md:hidden"
          />

          {/* Desktop nav */}
          <div className="md:flex hidden flex-row items-center text-[#E8F5E8] text-[11px] gap-6 uppercase leading-[16px]">
            {navlinks.map((link) => {
              const isActive =
                activeHash !== '' && link.href.includes(activeHash);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setActiveHash(link.hash);
                    scrollTo(e, link.href);
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

            <Button href="#contact" variant="yellow" size="lg" smoothScroll>
              Register Now!
            </Button>
          </div>
        </div>
        {/* Mobile dropdown (inherits navbar background) */}
        <MenuDropDown
          className={cn(
            'md:hidden text-white flex flex-col capitalize gap-4',
            openMenu ? 'mt-4' : '',
          )}
          open={openMenu}
        >
          {navlinks.map((link) => {
            const isActive =
              activeHash !== '' && link.href.includes(activeHash);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setActiveHash(link.hash);
                  scrollTo(e, link.href);
                  setOpenMenu(false);
                  menuBtnRef.current?.close();
                }}
                className={cn(
                  'transition-all duration-200 hover:text-[#FCC800] mx-6',
                  isActive
                    ? 'text-[#FCC800] underline underline-offset-4 decoration-[#FCC800]'
                    : 'text-inherit',
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mx-6 mb-4">
            <Button
              href="#contact"
              variant="yellow"
              size="sm"
              smoothScroll
              onClick={() => {
                setOpenMenu(false);
                menuBtnRef.current?.close();
              }}
              shadowSize="sm"
            >
              Register Now!
            </Button>
          </div>
        </MenuDropDown>
      </div>
    </>
  );
}
