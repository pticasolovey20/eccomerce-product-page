import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils';

import { MdOutlineDeleteOutline } from 'react-icons/md';

export const Cart = () => {
	const { cart, handleClearCart, handleCloseCart } = useAppContext();

	return (
		<div className='w-full flex-1 flex p-6'>
			{cart.length > 0 ? (
				<div className='flex-1 flex flex-col justify-between'>
					<div className='flex items-center justify-between gap-4'>
						<div className='flex items-center gap-4'>
							<img src='./images/image-product-1.jpg' alt='main' className='w-12 h-12 rounded-md' />

							<div className='text-neutral-dark-grayish-blue'>
								<span className='text-xl leading-none'>Fall Limited Edition Sneakers</span>

								<div className='flex gap-2'>
									<span>$125.00 x =</span>
									<span className='font-bold text-black'>${125 * cart.length}</span>
								</div>
							</div>
						</div>

						<MdOutlineDeleteOutline
							size={25}
							className='hover:scale-110'
							onClick={handleClearCart}
						/>
					</div>

					<button
						onClick={handleCloseCart}
						className={cn(
							'flex items-center justify-center gap-3',
							'w-full px-4 py-3 rounded-xl',
							'lg:text-lg font-bold text-white',
							'bg-primary-orange hover:opacity-50 duration-200'
						)}
					>
						Buy
					</button>
				</div>
			) : (
				<div className='flex-1 flex items-center justify-center'>
					<span className='font-bold text-neutral-dark-grayish-blue'>Your cart is empty</span>
				</div>
			)}
		</div>
	);
};
