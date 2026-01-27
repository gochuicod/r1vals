"use client";

import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-black uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-body h-auto min-h-10',
  {
    variants: {
      variant: {
        default: 'bg-black border border-[#FF1B1B] text-[#FF0055] shadow-[0px_0px_15.6256px_#0022FF,3.12513px_3.12513px_0px_#0022FF] hover:shadow-[0px_0px_20px_#0022FF,4px_4px_0px_#0022FF] active:shadow-[0px_0px_10px_#0022FF,2px_2px_0px_#0022FF]',
        protocol: 'bg-black border border-[#FF1B1B] text-white text-center font-heading uppercase font-bold leading-none shadow-[0px_0px_15.6256px_#0022FF,3.12513px_3.12513px_0px_#0022FF] hover:cursor-default',
        yellow: 'bg-black border-[1.9532px] border-[#FCC800] text-[#FCC800] font-bold text-center shadow-[0px_0px_15.6256px_#FCC800]',
      },
      size: {
        default: 'px-4 py-2 text-xs md:px-8 md:py-4 md:text-sm',
        sm: 'px-5 py-3 text-lg',
        lg: 'px-8 py-4',
        protocol: 'w-full px-4 py-3 text-lg md:w-fit md:px-8 md:py-4 md:text-btn-protocol',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

// Use a more flexible interface to avoid "href" conflicts on buttons
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  smoothScroll?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, href, target, children, smoothScroll, ...props }, ref) => {
    const scrollTo = useSmoothScroll();
    
    const isExternal = href && /^(http|mailto:|tel:)/.test(href);
    const isSmooth = smoothScroll && (href === '/' || href?.includes('#'));
    const isDisabled = isLoading || props.disabled;

    const renderContent = (
      <>
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        
        <span className={cn(
          "leading-none", 
          variant === 'yellow' && "flex items-center justify-center"
        )}>
          {children}
        </span>
        
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    const commonClasses = cn(buttonVariants({ variant, size }), className);

    // Handle Smooth Scroll clicks
    const handleSmoothClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isSmooth && href) {
        scrollTo(e, href);
      }
      // Cast to MouseEvent to satisfy common usage
      if (props.onClick) props.onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    // 1. If it's a link (external or hash)
    if (href) {
      const linkProps = {
        className: commonClasses,
        target: target || (isExternal ? '_blank' : undefined),
        rel: target === '_blank' || isExternal ? 'noopener noreferrer' : undefined,
      };

      if (isExternal || isSmooth) {
        return (
          <a href={href} onClick={handleSmoothClick} {...linkProps}>
            {renderContent}
          </a>
        );
      }

      return (
        <Link href={href} {...linkProps}>
          {renderContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={commonClasses}
        disabled={isDisabled}
        {...props}
      >
        {renderContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };