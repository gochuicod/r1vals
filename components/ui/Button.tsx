/**
 * Button Component (shadcn/ui variant)
 *
 * Usage:
 *
 * import { Button } from '@/components/ui/Button';
 *
 * // Default button
 * <Button variant="default">JOIN US</Button>
 *
 * // Protocol variant
 * <Button variant="protocol">7x7 PROTOCOL: ASIA’S LARGEST</Button>
 *
 * // Custom text style
 * <Button variant="default" className="!text-h6 text-brandRed-textBtn">Secure my Spot</Button>
 *
 * // As a link (internal)
 * <Button href="/about" variant="default">About</Button>
 *
 * // As a link (external)
 * <Button href="https://example.com" variant="default" target="_blank">External</Button>
 *
 * // With loading state
 * <Button isLoading variant="default">Loading…</Button>
 *
 * // With left/right icons
 * <Button leftIcon={<Icon />} rightIcon={<Icon />} variant="default">With Icons</Button>
 *
 * Props:
 * - variant: 'default' | 'protocol' (styling variant)
 * - isLoading: boolean (shows spinner, disables interaction)
 * - leftIcon, rightIcon: ReactNode (optional icons)
 * - href: string (renders as <a> or <Link> if provided)
 * - target: string (for external links)
 * - All standard button props (onClick, disabled, etc.)
 */
import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const buttonVariants = cva(
  'flex w-fit items-center justify-center gap-2 whitespace-normal rounded-none font-black uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-body h-auto min-h-10',
  {
    variants: {
      variant: {
        default: [
          // Mobile
          'bg-black',
          'border',
          'border-solid',
          'border-[#FF1B1B]',
          'text-[#FF0055]',
          'shadow-[0px_0px_15.6256px_#0022FF,_3.12513px_3.12513px_0px_#0022FF]',
          'hover:shadow-[0px_0px_20px_#0022FF,_4px_4px_0px_#0022FF]',
          'active:shadow-[0px_0px_10px_#0022FF,_2px_2px_0px_#0022FF]',
          'px-4',
          'py-2',
          'text-xs',
          // md overrides
          'md:px-8',
          'md:py-4',
          'md:text-sm',
        ].join(' '),
        protocol: [
          // Mobile
          'bg-black',
          'border',
          'border-solid',
          'border-[#FF1B1B]',
          'shadow-[0px_0px_15.6256px_#0022FF,_3.12513px_3.12513px_0px_#0022FF]',
          'px-4',
          'py-3',
          'w-full',
          'text-lg',
          'flex',
          'flex-row',
          'justify-center',
          'items-center',
          'rounded-none',
          'font-bebas',
          'text-white',
          'text-center',
          'font-bold',
          'leading-none',
          // md overrides
          'md:px-8',
          'md:py-4',
          'md:w-fit',
          'md:text-btn-protocol',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);



export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
}


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      target,
      children,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {leftIcon && <span className="flex-none">{leftIcon}</span>}
        <span className="leading-none">{children}</span>
        {rightIcon && <span className="flex-none">{rightIcon}</span>}
        {isLoading && (
          <span className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent inline-block align-middle" />
        )}
      </>
    );

    // External link
    const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'));
    if (isExternal && href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant }), className)}
          target={target || (href.startsWith('http') ? '_blank' : undefined)}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          aria-disabled={isLoading || props.disabled}
          tabIndex={isLoading || props.disabled ? -1 : undefined}
          {...(props as any)}
        >
          {content}
        </a>
      );
    }

    // Internal link (Next.js Link)
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant }), className)}
          tabIndex={isLoading || props.disabled ? -1 : undefined}
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    // Button
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant }), className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };