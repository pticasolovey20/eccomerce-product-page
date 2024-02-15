import { motion } from 'framer-motion';
import { cn } from '../../utils';
import { MdClose } from 'react-icons/md';

const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClick}
			className={cn(
				'fixed top-0 left-0 bg-black/40 z-20',
				'w-full h-full flex justify-center items-center'
			)}
		>
			{children}
		</motion.div>
	);
};

const dropIn = {
	hidden: {
		y: '100dvh',
		opacity: 0,
	},

	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 25,
			stiffness: 500,
		},
	},

	exit: {
		y: '100dvh',
		opacity: 0,
	},
};

export const Modal = ({ label, handleClose, children }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				onClick={(event) => event.stopPropagation()}
				className={cn(
					'relative w-full sm:max-w-[400px] h-full sm:max-h-[500px]',
					'flex flex-col sm:rounded-2xl bg-white z-30'
				)}
			>
				<div className='flex justify-between border-b p-6'>
					<h1 className='text-2xl sm:text-4xl font-semibold'>{label}</h1>

					<button onClick={handleClose}>
						<MdClose size={30} />
					</button>
				</div>

				{children}
			</motion.div>
		</Backdrop>
	);
};
