import { useAppContext } from '../../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../utils';

import { MdClose } from 'react-icons/md';

const navigation = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const SideBar = () => {
	const { sideIsOpen, handleCloseSidebar } = useAppContext();

	const asideToggle = {
		open: {
			x: '0%',
			transition: { when: 'beforeChildren', duration: 0.3 },
		},

		closed: {
			x: '-100%',
			transition: { when: 'afterChildren', duration: 0.3 },
		},
	};

	return (
		<AnimatePresence>
			{sideIsOpen && (
				<motion.aside
					key='mobile-navigation'
					initial='closed'
					animate='open'
					exit='closed'
					variants={asideToggle}
					className={cn(
						'fixed inset-0 h-[100dvh] w-full md:hidden',
						'flex flex-col p-6 gap-8 z-10 bg-white'
					)}
				>
					<MdClose size={30} onClick={handleCloseSidebar} className='-ml-1' />

					<nav>
						<ul className='flex flex-col h-full'>
							{navigation.map((link, index) => (
								<li
									key={index}
									className='flex items-center py-2 text-2xl font-bold cursor-pointer'
								>
									{link}
								</li>
							))}
						</ul>
					</nav>
				</motion.aside>
			)}
		</AnimatePresence>
	);
};
