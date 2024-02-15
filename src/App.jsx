import { useAppContext } from './context/AppContext';
import { AnimatePresence } from 'framer-motion';

import { Header } from './components/ui/Header';
import { SideBar } from './components/ui/Sidebar';
import { Modal } from './components/ui/Modal';
import { Cart } from './components/shared/Cart';

import { Gallery } from './components/shared/Gallery';
import { Description } from './components/shared/Description';

const App = () => {
	const { sideIsOpen, cartIsOpen, handleCloseCart } = useAppContext();

	return (
		<main className='min-h-screen flex flex-col select-none'>
			<>
				<Header />
				{sideIsOpen && <SideBar />}
			</>

			<AnimatePresence initial={false} mode='wait'>
				{cartIsOpen && (
					<Modal label='Cart' handleClose={handleCloseCart}>
						<Cart />
					</Modal>
				)}
			</AnimatePresence>

			<section className='flex-1 flex justify-center'>
				<div className='w-full max-w-[1400px] flex flex-col lg:flex-row xl:gap-10'>
					<Gallery />
					<Description />
				</div>
			</section>
		</main>
	);
};

export default App;
