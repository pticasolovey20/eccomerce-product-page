import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [sideIsOpen, setSideIsOpen] = useState(false);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [amount, setAmount] = useState(1);

	const handleOpenSidebar = () => setSideIsOpen(true);
	const handleCloseSidebar = () => setSideIsOpen(false);

	const handleOpenCart = () => setCartIsOpen(true);
	const handleCloseCart = () => setCartIsOpen(false);

	const handleDecreaseAmount = () => setAmount((prev) => (prev - 1 < 1 ? 1 : prev - 1));
	const handleIncreaseAmount = () => setAmount((prev) => prev + 1);

	const handleAddToCart = () => {
		if (amount > 0) {
			const itemsToAdd = Array.from({ length: amount }, (_, index) => index);
			setCart((prev) => [...prev, ...itemsToAdd]);
			setAmount(1);
		}
	};

	const handleClearCart = () => setCart([]);

	return (
		<AppContext.Provider
			value={{
				sideIsOpen,
				handleOpenSidebar,
				handleCloseSidebar,
				cartIsOpen,
				handleOpenCart,
				handleCloseCart,
				cart,
				handleClearCart,
				amount,
				handleDecreaseAmount,
				handleIncreaseAmount,
				handleAddToCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
