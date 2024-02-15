import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils';

import { Counter } from './Counter';
import { BsCart3 } from 'react-icons/bs';

export const Description = () => {
	const { handleAddToCart } = useAppContext();

	return (
		<div className='w-full lg:max-w-[700px] flex-1 lg:flex-auto flex flex-col justify-around lg:justify-center gap-4 lg:gap-8 p-6 lg:px-20'>
			<div className='flex flex-col gap-6 md:gap-8'>
				<span className='text-xl uppercase text-primary-orange font-bold tracking-widest'>
					Sneaker Company
				</span>

				<h1 className='text-4xl lg:text-5xl font-bold text-neutral-very-dark-blue'>
					Fall Limited Edition Sneakers
				</h1>

				<p className='text-xl md:text-2xl text-neutral-dark-grayish-blue mt-2 md:mt-0'>
					These low-profile sneakers are your perfect casual wear companion. Featuring a durable
					rubber outer sole, they'll withstand everything the weather can offer.
				</p>
			</div>

			<div className='flex flex-col gap-4'>
				<div
					className={cn(
						'flex flex-col justify-between gap-2',
						'xs:flex-row md:flex-col',
						'mt-2 md:mt-0'
					)}
				>
					<div className='flex gap-3 items-center font-bold'>
						<span className='text-xl md:text-4xl text-neutral-very-dark-blue'>$125.00</span>

						<span className='px-4 py-1 text-xl text-primary-orange rounded-md bg-primary-pale-orange'>
							50%
						</span>
					</div>

					<span className='text-xl sm:text-2xl font-semibold text-neutral-dark-grayish-blue line-through'>
						$250.00
					</span>
				</div>

				<div className='flex flex-col sm:flex-row items-center gap-4'>
					<Counter />

					<button
						onClick={handleAddToCart}
						className={cn(
							'flex items-center justify-center gap-3',
							'w-full px-4 py-3 rounded-xl',
							'text-xl font-bold text-white',
							'bg-primary-orange hover:opacity-50 duration-200'
						)}
					>
						<BsCart3 size={20} className='cursor-pointer hover:scale-110 duration-200' />
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};
