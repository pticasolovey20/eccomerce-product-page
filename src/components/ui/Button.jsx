import { cn } from '../../utils';

export const Button = ({ children, fullWidth = false, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'flex items-center justify-center gap-3 w-full',
				!fullWidth && 'lg:w-[60%]',
				'p-4 rounded-xl',
				'lg:text-lg font-bold text-white',
				'bg-primary-orange hover:opacity-80 duration-200'
			)}
		>
			{children}
		</button>
	);
};
