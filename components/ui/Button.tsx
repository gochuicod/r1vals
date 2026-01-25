/**
 * Button Component (shadcn/ui variant)
 *
 * Usage:
 *
 * import { Button } from '@/components/ui/Button';
 *
 * // --- VARIANTS (Colors & Visuals) ---
 * // Default button (Pink text, blue shadow)
 * <Button variant="default">JOIN US</Button>
 *
 * // Protocol variant (White text, Bebas font, centered)
 * <Button variant="protocol">7x7 PROTOCOL</Button>
 *
 * // --- SIZES (Padding & Text) ---
 * // Small button
 * <Button size="sm">Small Action</Button>
 *
 * // Large button
 * <Button size="lg">Big Action</Button>
 *
 * // Protocol Size (Responsive text matching the specific design)
 * <Button variant="protocol" size="protocol">ASIA’S LARGEST</Button>
 *
 * // --- ADVANCED ---
 * // Custom override
 * <Button variant="default" className="!text-h6">Custom Font</Button>
 *
 * // As a link
 * <Button href="/about" size="lg">About</Button>
 *
 * // With loading state
 * <Button isLoading>Loading…</Button>
 *
 * Props:
 * - variant: 'default' | 'protocol'
 * - size: 'default' | 'sm' | 'lg' | 'protocol'
 * - isLoading: boolean
 * - href: string
 * - leftIcon, rightIcon: ReactNode
 */
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const buttonVariants = cva(
  // Base styles (Layout, Focus, Transitions)
  'flex w-fit items-center justify-center gap-2 whitespace-normal rounded-none font-black uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-body h-auto min-h-10',
  {
    variants: {
      // VISUAL STYLE (Colors, Borders, Shadows, Fonts)
      variant: {
        default: [
          'bg-black',
          'border border-solid border-[#FF1B1B]',
          'text-[#FF0055]',
          'shadow-[0px_0px_15.6256px_#0022FF,_3.12513px_3.12513px_0px_#0022FF]',
          'hover:shadow-[0px_0px_20px_#0022FF,_4px_4px_0px_#0022FF]',
          'active:shadow-[0px_0px_10px_#0022FF,_2px_2px_0px_#0022FF]',
        ].join(' '),
        protocol: [
          'bg-black',
          'border border-solid border-[#FF1B1B]',
          'shadow-[0px_0px_15.6256px_#0022FF,_3.12513px_3.12513px_0px_#0022FF]',
          'text-white text-center',
          'font-bebas font-bold leading-none',
        ].join(' '),
      },
      // DIMENSIONS (Padding, Font Sizes)
      size: {
        // Standard Responsive (Matches your original 'default' logic)
        default: 'px-4 py-2 text-xs md:px-8 md:py-4 md:text-sm',

        // Small (Compact)
        sm: 'px-5 py-3 text-h7 text-lg',

        // Large (Prominent)
        lg: 'px-8 py-4 text-h2 md:text-lg',

        // Protocol Specific (Matches your original 'protocol' logic)
        protocol:
          'w-full px-4 py-3 text-lg md:w-fit md:px-8 md:py-4 md:text-btn-protocol',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size, // Now destructuring size
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      target,
      children,
      type = 'button',
      ...props
    },
    ref,
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

    // Combine variant and size into classes
    const classes = cn(buttonVariants({ variant, size }), className);

    // External link
    const isExternal =
      href &&
      (href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:'));

    if (isExternal && href) {
      return (
        <a
          href={href}
          className={classes}
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
          className={classes}
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
        className={classes}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { buttonVariants };
