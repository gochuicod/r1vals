import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-full z-50',
        'flex flex-row',
        'justify-between',
        'items-center',
        'px-[80px] py-[20px]',
        'bg-black/35',
        'max-h-[75px]',
      )}
    >
      {/* Logo here */}
      <Link href="/">
        <Image
          src="/r1vals_logo.svg"
          alt="R1Vals Logo"
          width={113}
          height={37}
        />
      </Link>

      {/* Links here */}
      <div
        className={cn(
          'lg:flex hidden',
          'flex-row',
          'items-center',
          'text-[#E8F5E8] text-[11px]',
          'gap-6',
          'uppercase',
          'leading-[16px]',
        )}
      >
        <Link href="/#wild-events">wild events</Link>
        <Link href="/#legends">legends</Link>
        <Link href="/#chaos-league">chaos league</Link>
        <Link href="/#watch-live">watch live</Link>
        <Button
          variant="protocol"
          className="font-bebas_neue w-fit uppercase text-brandRed-400 font-body"
          size="sm"
        >
          join us
        </Button>
      </div>
    </div>
  );
}
