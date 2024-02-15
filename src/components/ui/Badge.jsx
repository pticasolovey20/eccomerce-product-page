import { cn } from '../../utils';

export const Badge = ({ content }) => {
	return (
		<div
			className={cn(
				'absolute top-[-4px] right-[-4px]',
				'h-4 w-4 flex items-center justify-center px-1.5',
				'rounded-full text-[10px] bg-primary-orange'
			)}
		>
			{content}
		</div>
	);
};
