import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

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

const Button = React.forwardRef(({ className, variant, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, className }))}
    {...props}
  />
));

Button.displayName = 'Button';

export { Button, buttonVariants };
