import { useState } from 'react';
import { cn } from '../../utils';

import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

const productImages = [
	{
		source: './images/image-product-1.jpg',
		sourceMini: './images/image-product-1-thumbnail.jpg',
		alt: 'tumb_1',
	},
	{
		source: './images/image-product-2.jpg',
		sourceMini: './images/image-product-2-thumbnail.jpg',
		alt: 'tumb_2',
	},
	{
		source: './images/image-product-3.jpg',
		sourceMini: './images/image-product-3-thumbnail.jpg',
		alt: 'tumb_3',
	},
	{
		source: './images/image-product-4.jpg',
		sourceMini: './images/image-product-4-thumbnail.jpg',
		alt: 'tumb_4',
	},
];

export const Gallery = () => {
	const [current, setCurrent] = useState(0);

	return (
		<div className='flex flex-col sm:grid grid-cols-2 lg:flex justify-center gap-4 lg:gap-8 sm:p-6 lg:px-16'>
			<div className='relative w-full'>
				<button
					onClick={() => setCurrent((prev) => (prev - 1 < 0 ? 3 : prev - 1))}
					className={cn(
						'absolute top-1/2 -translate-y-1/2 left-1 xs:left-3',
						'flex sm:hidden items-center justify-center'
					)}
				>
					<IoChevronBackSharp size={30} color='white' />
				</button>

				<img
					className='aspect-video sm:aspect-square md:aspect-auto object-cover object-top sm:rounded-2xl overflow-hidden'
					src={productImages[current].source}
					alt='main'
				/>

				<button
					onClick={() => setCurrent((prev) => (prev + 1 > 3 ? 0 : prev + 1))}
					className={cn(
						'absolute top-1/2 -translate-y-1/2 right-1 xs:right-3',
						'flex sm:hidden items-center justify-center'
					)}
				>
					<IoChevronForwardSharp size={30} color='white' />
				</button>
			</div>

			<div className='w-full hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
				{productImages.map(({ sourceMini, alt }, index) => (
					<div key={index} className='relative col-span-1 rounded-xl overflow-hidden'>
						<img src={sourceMini} alt={alt} className='w-full' />

						<div
							onClick={() => setCurrent(index)}
							className={cn(
								'absolute top-0 left-0 w-full h-full',
								'rounded-xl opacity-60 cursor-pointer border-2 border-transparent',
								current === index && 'bg-primary-pale-orange/75',
								current === index && '!border-primary-orange'
							)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
