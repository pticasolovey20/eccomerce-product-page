import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const Counter = () => {
	const { amount, handleDecreaseAmount, handleIncreaseAmount } = useAppContext();

	return (
		<div
			className={cn(
				'flex w-full lg:w-[160px] items-center justify-evenly gap-8',
				'p-4 rounded-lg bg-neutral-light-grayish-blue'
			)}
		>
			<button
				className='flex items-center justify-center hover:scale-125 duration-200'
				onClick={handleDecreaseAmount}
			>
				<AiOutlineMinus />
			</button>

			<div className='h-4 w-4 flex items-center justify-center px-4 text-lg font-bold'>
				{amount}
			</div>

			<button
				className='flex items-center justify-center hover:scale-125 duration-200'
				onClick={handleIncreaseAmount}
			>
				<AiOutlinePlus />
			</button>
		</div>
	);
};
