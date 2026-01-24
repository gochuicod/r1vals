/**
 * HighlightedHeading Component
 *
 * Usage:
 *
 * import { HighlightedHeading } from '@/components/ui/HighlightedHeading';
 *
 * // Basic usage
 * <HighlightedHeading text="THE STAKES ARE HISTORIC." />
 *
 * // With highlighted text (red or blue)
 * <HighlightedHeading
 *   text="THE STAKES ARE HISTORIC."
 *   highlight="HISTORIC"
 *   highlightColor="red" // or "blue"
 * />
 *
 * // With different sizes
 * <HighlightedHeading text="THE STAKES ARE HISTORIC." size="xl" />
 * <HighlightedHeading text="THE STAKES ARE HISTORIC." size="lg" />
 * <HighlightedHeading text="THE STAKES ARE HISTORIC." size="md" />
 *
 * // With alignment
 * <HighlightedHeading text="THE STAKES ARE HISTORIC." align="center" />
 *
 * Props:
 * - text: string (required, full heading text)
 * - highlight: string (optional, substring to highlight)
 * - highlightColor: 'blue' | 'red' (default: 'blue')
 * - size: 'xl' | 'lg' | 'md' (default: 'xl')
 * - align: 'left' | 'center' | 'right' (default: 'left')
 * - textClassName: string (optional, extra classes for non-highlighted text)
 * - highlightClassName: string (optional, extra classes for highlighted text)
 * - className: string (optional, extra classes for the heading)
 * - ...props: All standard HTML heading props
 */
import React from 'react';

type HighlightColor = 'blue' | 'red';
type HighlightedHeadingSize = 'xl' | 'lg' | 'md';

export interface HighlightedHeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
	text: string;
	highlight?: string;
	align?: 'left' | 'center' | 'right';
	size?: HighlightedHeadingSize;
	highlightColor?: HighlightColor;
	textClassName?: string;
	highlightClassName?: string;
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const sizeMap: Record<HighlightedHeadingSize, string> = {
	xl: 'text-[48px] leading-[56px]',
	lg: 'text-[40px] leading-[48px]',
	md: 'text-[32px] leading-[40px]',
};

const highlightColorMap: Record<HighlightColor, string> = {
	blue: 'text-[#0022FF]',
	red: 'text-[#FF1B1B]',
};

export const HighlightedHeading: React.FC<HighlightedHeadingProps> = ({
	text,
	highlight,
	align = 'left',
	size = 'xl',
	highlightColor = 'blue',
	textClassName = '',
	highlightClassName = '',
	className = '',
	...props
}) => {
	const baseHeadingClass = [
		'font-orbitron',
		'font-extrabold',
		'uppercase',
		'tracking-[0.04em]',
		'text-black',
		sizeMap[size],
		align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left',
		className,
	].join(' ');

	if (!highlight) {
		return (
			<h2 className={baseHeadingClass + ' ' + textClassName} {...props}>
				{text}
			</h2>
		);
	}

	const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'i');
	const parts = text.split(regex);

	return (
		<h2 className={baseHeadingClass} {...props}>
			{parts.map((part, idx) =>
				regex.test(part) ? (
					<span
						key={idx}
						className={[
							highlightColorMap[highlightColor],
							'inline',
							highlightClassName,
						].join(' ')}
					>
						{part}
					</span>
				) : (
					<span key={idx} className={['inline', textClassName].join(' ')}>
						{part}
					</span>
				)
			)}
		</h2>
	);
};
