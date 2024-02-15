import { useAppContext } from '../../context/AppContext';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const Counter = () => {
	const { amount, handleDecreaseAmount, handleIncreaseAmount } = useAppContext();

	return (
		<div className='flex w-full items-center rounded-lg bg-neutral-light-grayish-blue'>
			<button
				className='w-full flex items-center justify-center p-4 hover:scale-125 duration-200'
				onClick={handleDecreaseAmount}
			>
				<AiOutlineMinus />
			</button>

			<div className='h-4 w-4 flex items-center justify-center p-4 text-lg font-bold'>{amount}</div>

			<button
				className='w-full flex items-center justify-center p-4 hover:scale-125 duration-200'
				onClick={handleIncreaseAmount}
			>
				<AiOutlinePlus />
			</button>
		</div>
	);
};
