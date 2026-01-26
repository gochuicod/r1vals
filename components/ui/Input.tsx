import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {/* Label on top */}
        <label className="text-xs md:text-sm font-bold whitespace-nowrap tracking-wide text-white/80 uppercase">
          {label}
        </label>
        
        {/* Input Field */}
        <div className="relative w-full">
          <input
            ref={ref}
            className={`
              w-full h-10 px-4 bg-transparent border text-sm md:text-base text-white 
              placeholder:text-white/40 placeholder:italic 
              focus:outline-none focus:ring-1 transition-all
              ${error 
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' 
                : 'border-white focus:border-white focus:ring-white/50'
              }
              ${className}
            `}
            {...props}
          />
        </div>

        {/* Error Message Below */}
        {error && (
          <span className="text-xs text-red-400 font-medium animate-in slide-in-from-top-1 fade-in-0">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;