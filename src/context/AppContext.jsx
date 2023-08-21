import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [sideIsOpen, setSideIsOpen] = useState(false);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cart, setCart] = useState([]);
	const [amount, setAmount] = useState(0);

	return (
		<AppContext.Provider
			value={{ sideIsOpen, setSideIsOpen, cartIsOpen, setCartIsOpen, cart, setCart, amount, setAmount }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useApp = () => useContext(AppContext);
