import { cn } from '../../utils';

export const Avatar = () => {
	return (
		<div
			className={cn(
				'w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-transparent cursor-pointer ',
				'hover:border-primary-orange hover:scale-110 duration-200'
			)}
		>
			<img src='/images/image-avatar.png' alt='avatar' />
		</div>
	);
};
