import React from 'react';
import Image from 'next/image';

type HighlightCardVariant = 'blue' | 'red';

interface HighlightCardProps {
    imageSrc: string;
    title: string;
    description: string;
    variant?: HighlightCardVariant;
    className?: string;
    imageAlt?: string;
}

const shadowMap: Record<HighlightCardVariant, string> = {
    blue: 'drop-shadow-[8px_8px_0px_#0022FF]',
    red: 'drop-shadow-[8px_8px_0px_#FF1B1B]',
};

export const HighlightCard: React.FC<HighlightCardProps> = ({
    imageSrc,
    title,
    description,
    variant = 'blue',
    className = '',
    imageAlt = '',
}) => {
    return (
        <div
            className={`
                flex flex-col 
                w-[262px] h-[440.24px] 
                bg-black pl-0 pr-2 py-1
                relative 
                ${shadowMap[variant]} 
                ${className}
            `}
        >
            <div className="relative w-full flex-1 bg-gray-100 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 262px"
                    priority
                />
            </div>

            <div className="flex flex-col justify-center items-center px-4 py-4 gap-2 w-full h-[132px] bg-black shrink-0">
                <div className="text-center flex-wrap text-h6 !text-white font-bold mb-1">
                    {title}
                </div>
                <div className="text-body font-inter text-center text-[#DDE2FF]">
                    {description}
                </div>
            </div>
        </div>
    );
};