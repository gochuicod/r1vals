'use client';

/**
 * BUTTON COMPONENT DOCUMENTATION
 * * A versatile button that handles standard actions, internal routing,
 * and smooth-scrolling for anchor links.
 * * @example Standard Action
 * <Button onClick={() => doSomething()}>Click Me</Button>
 * * @example Smooth Scroll to Section
 * <Button href="#contact" smoothScroll variant="yellow">Register Now</Button>
 * * @example Internal Navigation
 * <Button href="/dashboard">Go to App</Button>
 * * @props
 * - variant: 'default' | 'protocol' | 'yellow'
 * - size: 'default' | 'sm' | 'lg' | 'protocol'
 * - smoothScroll: boolean - Set to true for #anchor links to use smooth animation
 * - isLoading: boolean - Disables button and shows a loading spinner
 */

import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-black uppercase transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-body h-auto min-h-10',
  {
    variants: {
      variant: {
        default: 'bg-black border border-[#FF1B1B] text-[#FF0055]',
        protocol:
          'bg-black border border-[#FF1B1B] text-white text-center font-heading uppercase font-bold leading-none hover:cursor-default',
        yellow:
          'bg-black/50 border-2 border-[#FCC800] normal-case text-[#FCC800] hover:text-black hover:bg-[#FCC800] hover:border-black hover:scale-[1.05] active:scale-[0.95] font-bold text-center will-change-transform',
      },

      size: {
        default: 'px-4 py-2 text-xs md:px-8 md:py-4 md:text-sm',
        sm: 'px-4 py-2 text-lg',
        lg: 'px-8 py-4',
        protocol:
          'w-full px-4 py-3 text-lg md:w-fit md:px-8 md:py-4 md:text-btn-protocol',
      },
      shadowSize: {
        lg: 'shadow-[0px_0px_15.6px_rgba(252,200,0,0.9)]',
        sm: 'shadow-[0px_0px_8px_rgba(252,200,0,0.2)]',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
      shadowSize: 'lg', // 👈 default keeps existing look
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  smoothScroll?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      href,
      target,
      children,
      smoothScroll,
      ...props
    },
    ref,
  ) => {
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

        <span
          className={cn(
            'leading-none',
            variant === 'yellow' && 'flex items-center justify-center',
          )}
        >
          {children}
        </span>

        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </>
    );

    const commonClasses = cn(buttonVariants({ variant, size }), className);

    const handleSmoothClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isSmooth && href) {
        scrollTo(e, href);
      }
      if (props.onClick)
        props.onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    if (href) {
      const linkProps = {
        className: commonClasses,
        target: target || (isExternal ? '_blank' : undefined),
        rel:
          target === '_blank' || isExternal ? 'noopener noreferrer' : undefined,
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
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
