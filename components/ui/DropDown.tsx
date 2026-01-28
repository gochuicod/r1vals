import React from 'react';
import { cn } from '@/lib/utils';

interface DropDownProps {
  triggerIcon: React.ReactNode;
  children: React.ReactNode;
  side?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
}

function DropDown({ triggerIcon, children, side, className }: DropDownProps) {
  const [open, setOpen] = React.useState(false);
  //utils for handling clicks outside the dropdown to close it
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button type="button" onClick={() => setOpen(!open)}>
        {triggerIcon}
      </button>

      {open && (
        <div
          className={cn(
            'absolute z-50',
            side === 'top-left'
              ? 'bottom-full left-0'
              : side === 'bottom-right'
                ? 'top-full right-0'
                : side === 'top-right'
                  ? 'bottom-full right-0'
                  : side === 'bottom-left'
                    ? 'top-full left-0'
                    : 'top-full left-0',
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default DropDown;
