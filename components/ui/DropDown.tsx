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

  return (
    <>
      <div className="relative">
        <button type="button" onClick={() => setOpen(!open)}>
          {triggerIcon}
        </button>
        {open && (
          <div
            className={cn(
              'absolute',
              side === 'top-left'
                ? 'bottom-full left-0'
                : side === 'bottom-right'
                  ? 'top-full right-0'
                  : side === 'top-right'
                    ? 'top-full right-0'
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
    </>
  );
}

export default DropDown;
