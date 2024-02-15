import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils';

import { MdMenu } from 'react-icons/md';
import { Logo } from './Logo';

import { BsCart3 } from 'react-icons/bs';
import { Badge } from './Badge';
import { Avatar } from './Avatar';

const navigation = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const Header = () => {
	const { handleOpenSidebar, handleOpenCart, cart } = useAppContext();

	return (
		<header className='flex justify-center px-6'>
			<div className='h-20 md:h-24 w-full max-w-[1400px] flex items-center justify-between sm:border-b'>
				<div className='flex items-center gap-8'>
					<div className='flex items-center gap-4'>
						<MdMenu size={30} onClick={handleOpenSidebar} className='md:hidden' />

						<a href='/' className='mb-1'>
							<Logo />
						</a>
					</div>

					<nav className='hidden md:flex items-center'>
						<ul className='flex items-center gap-8'>
							{navigation.map((link, index) => (
								<li
									key={index}
									className={cn(
										'h-24 flex items-center py-2 cursor-pointer',
										'text-gray-500 border-b-4 border-transparent ',
										'hover:border-primary-orange hover:text-black'
									)}
								>
									<a href='/' className='text-lg'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className='flex items-center gap-2 md:gap-6'>
					<div onClick={handleOpenCart} className='relative'>
						<BsCart3 size={25} className='cursor-pointer hover:scale-110 duration-200' />
						{cart.length > 0 && <Badge content={cart.length} />}
					</div>

					<Avatar />
				</div>
			</div>
		</header>
	);
};
